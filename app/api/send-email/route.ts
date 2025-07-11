import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { CheckoutFormData } from "@/constant/types";

import fs from "fs";
import path from "path";
import { CartItem } from "@/app/type/Product";
import { MailMessage } from "./function";
import { v4 as uuidv4 } from "uuid";

export async function POST(req: Request) {
  const {
    to,
    subject,
    values,
    cart,
  }: {
    to: string;
    subject: string;
    values: CheckoutFormData;
    cart: CartItem[];
  } = await req.json();

  const html = MailMessage(values, cart);

  // ✅ Save to file BEFORE sending email
  const orderId = uuidv4();
  const filePath = path.join(process.cwd(), "orders", `${orderId}.txt`);

  const orderContent = `
    ORDER ID: ${orderId}
    TO: ${to}
    SUBJECT: ${subject}
    NAME: ${values.name}
    EMAIL: ${values.email}
    PHONE: ${values.phone}
    CART: ${JSON.stringify(cart, null, 2)}
  `;

  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, orderContent.trim(), "utf-8");
  } catch (fileErr) {
    console.error("Failed to save order to file:", fileErr);
    return NextResponse.json({ success: false, error: "Failed to log order." });
  }

  // Now send the email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    html,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send failed:", error);
    return NextResponse.json({ success: false, error: "Email failed, order was saved." });
  }
}
