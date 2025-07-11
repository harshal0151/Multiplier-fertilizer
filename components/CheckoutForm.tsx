'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from "sonner";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { FieldProps } from 'formik';
import * as Yup from 'yup';
import { CheckoutFormData } from '@/constant/types';
import { useCartStore } from '@/store/useCartStore';
// import { useRouter } from 'next/navigation';

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  // Personal Information
  name: Yup.string()
    .required('Name is required')
    .min(2, 'Name must be at least 2 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^\+?[\d\s\-\(\)]+$/, 'Please enter a valid phone number'),
    
  // Billing Address
  address: Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  postalCode: Yup.string().required('Postal code is required'),
  district: Yup.string().required('district is required'),
  
  // Shipping Address - conditional validation
  shippingSameAsBilling: Yup.boolean(),
  shippingAddress: Yup.string().when('shippingSameAsBilling', {
    is: false,
    then: (schema) => schema.required('Shipping address is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  shippingCity: Yup.string().when('shippingSameAsBilling', {
    is: false,
    then: (schema) => schema.required('Shipping city is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  shippingState: Yup.string().when('shippingSameAsBilling', {
    is: false,
    then: (schema) => schema.required('Shipping state is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  shippingPostalCode: Yup.string().when('shippingSameAsBilling', {
    is: false,
    then: (schema) => schema.required('Shipping postal code is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
  shippingCountry: Yup.string().when('shippingSameAsBilling', {
    is: false,
    then: (schema) => schema.required('Shipping country is required'),
    otherwise: (schema) => schema.notRequired(),
  }),
});

// Initial form values
const initialValues: CheckoutFormData = {
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  state: '',
  postalCode: '',
  district: '',
  shippingSameAsBilling: true,
  shippingAddress: '',
  shippingCity: '',
  shippingState: '',
  shippingPostalCode: '',
  shippingCountry: '',
};

const CheckoutForm = () => {

  const { cart, emptyCart } = useCartStore();
  // const router = useRouter();

  const handleSubmit = async (values: CheckoutFormData, { setSubmitting }: any) => {
    emptyCart();
    
    try {
      
    
      const promise = fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'mohitsasane76@gmail.com',
          subject: 'Welcome!',
          message: 'Thank you for signing up!',
          values,
          cart,
        }),
      }).then(async (res) => {
        if (!res.ok) throw new Error('Failed to send email');
        return res.json();
      });
    
      await toast.promise(promise, {
        loading: 'Sending email...',
        success: () => {
          window.location.href='https://wa.me/9284117732';
          return `Order placed successfully!`;
        },
        error: 'Failed to send email.',
      });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error(error);
    } finally {
      setSubmitting(false); // Always reset submitting state
    }
    
    
  };

  return (
    <div className="section-container py-8">
      <div className="max-w-4xl mx-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, isSubmitting, isValid, dirty }) => (
            
            <Form className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                  (console.log(errors,'errors'),null)
                }
                
                {/* Personal Information */}
                <Card className="shadow-box ">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-green-700">
                      Personal Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="name" className='p-2'>Full Name *</Label>
                      <Field name="name">
                        {({ field }: FieldProps) => (
                          <Input
                            {...field}
                            id="name"
                            type="text"
                            className={errors.name && touched.name ? 'border-red-500' : '' } 
                            placeholder="Enter your full name"
                          />
                        )}
                      </Field>
                      <ErrorMessage name="name" component="p" className="text-red-500 text-sm mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className='p-2'>Email Address *</Label>
                      <Field name="email">
                        {({ field }: FieldProps) => (
                          <Input
                            {...field}
                            id="email"
                            type="email"
                            className={errors.email && touched.email ? 'border-red-500' : ''}
                            placeholder="Enter your email address"
                          />
                        )}
                      </Field>
                      <ErrorMessage name="email" component="p" className="text-red-500 text-sm mt-1" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className='p-2'>Mobile Number *</Label>
                      <Field name="phone">
                        {({ field }: FieldProps) => (
                          <Input
                            {...field}
                            id="phone"
                            type="number"
                            className={errors.phone && touched.phone ? 'border-red-500' : ''}
                            placeholder="Enter your phone number"
                          />
                        )}
                      </Field>
                      <ErrorMessage name="phone" component="p" className="text-red-500 text-sm mt-1" />
                    </div>
                  </CardContent>
                </Card>

                {/* Billing Address */}
                <Card className="shadow-box">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-green-700 ">
                      Billing Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="address" className='p-2'>Street Address *</Label>
                      <Field name="address">
                        {({ field }: FieldProps) => (
                          <Input
                            {...field}
                            id="address"
                            type="text"
                            className={errors.address && touched.address ? 'border-red-500' : ''}
                            placeholder="Enter your street address"
                          />
                        )}
                      </Field>
                      <ErrorMessage name="address" component="p" className="text-red-500 text-sm mt-1" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city" className='p-2'>City/Tehsil *</Label>
                        <Field name="city">
                          {({ field }: FieldProps) => (
                            <Input
                              {...field}
                              id="city"
                              type="text"
                              className={errors.city && touched.city ? 'border-red-500' : ''}
                              placeholder="Enter city"
                            />
                          )}
                        </Field>
                        <ErrorMessage name="city" component="p" className="text-red-500 text-sm mt-1" />
                      </div>
                      
                      <div>
                        <Label htmlFor="district" className='p-2'>District *</Label>
                        <Field name="district">
                          {({ field }: FieldProps) => (
                            <Input
                              {...field}
                              id="district"
                              type="text"
                              className={errors.district && touched.district ? 'border-red-500' : ''}
                              placeholder="Enter District"
                            />
                          )}
                        </Field>
                        <ErrorMessage name="district" component="p" className="text-red-500 text-sm mt-1" />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="postalCode" className='p-2'>PIN Code *</Label>
                        <Field name="postalCode">
                          {({ field }: FieldProps) => (
                            <Input
                              {...field}
                              id="postalCode"
                              type="text"
                              className={errors.postalCode && touched.postalCode ? 'border-red-500' : ''}
                              placeholder="Enter postal code"
                            />
                          )}
                        </Field>
                        <ErrorMessage name="postalCode" component="p" className="text-red-500 text-sm mt-1" />
                      </div>
                      
                      <div>
                        <Label htmlFor="state" className='p-2'>State/Province *</Label>
                        <Field name="state">
                          {({ field }: FieldProps) => (
                            <Input
                              {...field}
                              id="state"
                              type="text"
                              className={errors.state && touched.state ? 'border-red-500' : ''}
                              placeholder="Enter state"
                            />
                          )}
                        </Field>
                        <ErrorMessage name="state" component="p" className="text-red-500 text-sm mt-1" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Shipping Address Section */}
              <Card className="shadow-box">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-green-700">
                    Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-4">
                    <Field
                      type="checkbox"
                      name="shippingSameAsBilling"
                      id="shippingSameAsBilling"
                      className="rounded border-gray-300"
                    />
                    <Label htmlFor="shippingSameAsBilling">
                      Shipping address is the same as billing address
                    </Label>
                  </div>
                  
                  {!values.shippingSameAsBilling && (
                    <div className="space-y-4 pt-4 border-t">
                      <div>
                        <Label htmlFor="shippingAddress" className='p-2'>Street Address *</Label>
                        <Field name="shippingAddress">
                          {({ field }: FieldProps) => (
                            <Input
                              {...field}
                              id="shippingAddress"
                              type="text"
                              className={errors.shippingAddress && touched.shippingAddress ? 'border-red-500' : ''}
                              placeholder="Enter shipping address"
                            />
                          )}
                        </Field>
                        <ErrorMessage name="shippingAddress" component="p" className="text-red-500 text-sm mt-1" />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="shippingCity" className='p-2'>City *</Label>
                          <Field name="shippingCity">
                            {({ field }: FieldProps) => (
                              <Input
                                {...field}
                                id="shippingCity"
                                type="text"
                                className={errors.shippingCity && touched.shippingCity ? 'border-red-500' : ''}
                                placeholder="Enter city"
                              />
                            )}
                          </Field>
                          <ErrorMessage name="shippingCity" component="p" className="text-red-500 text-sm mt-1" />
                        </div>
                        
                        <div>
                          <Label htmlFor="shippingState" className='p-2'>State/Province *</Label>
                          <Field name="shippingState">
                            {({ field }: FieldProps) => (
                              <Input
                                {...field}
                                id="shippingState"
                                type="text"
                                className={errors.shippingState && touched.shippingState ? 'border-red-500' : ''}
                                placeholder="Enter state"
                              />
                            )}
                          </Field>
                          <ErrorMessage name="shippingState" component="p" className="text-red-500 text-sm mt-1" />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="shippingPostalCode" className='p-2'>Postal Code *</Label>
                          <Field name="shippingPostalCode">
                            {({ field }: FieldProps) => (
                              <Input
                                {...field}
                                id="shippingPostalCode"
                                type="text"
                                className={errors.shippingPostalCode && touched.shippingPostalCode ? 'border-red-500' : ''}
                                placeholder="Enter postal code"
                              />
                            )}
                          </Field>
                          <ErrorMessage name="shippingPostalCode" component="p" className="text-red-500 text-sm mt-1" />
                        </div>
                        
                        <div>
                          <Label htmlFor="shippingCountry" className='p-2'>Country *</Label>
                          <Field name="shippingCountry">
                            {({ field }: FieldProps) => (
                              <Input
                                {...field}
                                id="shippingCountry"
                                type="text"
                                className={errors.shippingCountry && touched.shippingCountry ? 'border-red-500' : ''}
                                placeholder="Enter country"
                              />
                            )}
                          </Field>
                          <ErrorMessage name="shippingCountry" component="p" className="text-red-500 text-sm mt-1" />
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Submit Button */}
              <div className="flex justify-center pt-6">
                <Button
                  type="submit"
                  disabled={isSubmitting || !isValid || !dirty}
                  className="btn-primary min-w-[200px]"
                >
                  {isSubmitting ? 'Processing...' : 'Place Order'}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CheckoutForm;