
"use client"
import { Input } from '@/components/acer-ui/input'
// import { TextArea } from '@/components/acer/textarea'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
    Form,
    FormControl, FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form"
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from "@/components/ui/popover"
import { AppointmentSchema } from '@/lib/schema/Appointment'
import { sendEmail } from '@/lib/sendmail'
import { cn } from '@/lib/utils'
import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { toast } from 'sonner'
import { z } from "zod"

const BookingForm = () => {
    const form = useForm<z.infer<typeof AppointmentSchema>>({
        resolver: zodResolver(AppointmentSchema),
    })
    const [submitting, setSubmitting] = useState(false);
    async function onSubmit(values: z.infer<typeof AppointmentSchema>) {
        setSubmitting(true);
        const bodyText = `
        <div>
            <h1
                style="margin: 0px; padding: 0px; color: #0f0f0f; font-size: 1.2rem"
            >
                Appointment Date: ${values.appointmentDate.toLocaleString().substring(0, 15)} 🧑‍🚀 🗓️
            </h1><br>
            <section
                style="margin: 7px 0px; color: #1f1f1f; font-size: 16px; margin: 0px; border: 2px solid black; padding: 10px; border-radius: 10px;"
            >
            <p>Name: <span style="color: #0f0f0f; font-weight: 700">${values.firstName} ${values.lastName}</span></p>
            <p>Contact Number: <span style="color: #0f0f0f; font-weight: 700">${values.phonenumber}</span></p>
            ${values.email
            && `<p>Email: <span style="color: #0f0f0f; font-weight: 700">${values.email} 📨</span></p>`
            }
            ${values.message
            && ` <p>Their message: <span style="color: #0f0f0f; font-weight: 700">${values.message}</p>`
            }
            </section>
            <div style="width: 100%; text-align: center; margin: 10px 0px; color: #10101f">
            <p>Powered by: <a href="https://themisfitofnightraid.com" style="color: #10101f; text-decoration: none;"> TheMisFitOfNightRaid </a></p>
            </div>
        </div>
        `
        console.log(values)
        const response: any = await sendEmail({
            subject: "New Appointment Booked🚀",
            body: bodyText,
        })

        if (response.success) {
            toast.success('Appointment Booked. 🥳')
        }
        setSubmitting(false);
    }
    return (
        <div className='py-10 flex flex-col items-center gap-14'>
            <div className='flex flex-col w-full items-center gap-7'>
                <span className='text-light text-3xl text-primary'>APPOINTMENT</span>
                <div className='text-5xl text-center'>
                    <h2>Make An Appointment</h2>
                </div>
            </div>
            <div className="max-w-md w-full flex justify-center mx-auto rounded-none md:rounded-2xl p-4 md:px-8 shadow-input bg-white dark:bg-black">
                <Form {...form}>
                    <form className="my-8" onSubmit={form.handleSubmit(onSubmit)}>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <LabelInputContainer>
                                        <FormItem>
                                            <FormLabel>
                                                First name
                                            </FormLabel>
                                            <FormControl>
                                                <Input id="firstName" placeholder="First Name" type="text"  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    </LabelInputContainer>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <LabelInputContainer>
                                        <FormItem>
                                            <FormLabel>
                                                Last name
                                            </FormLabel>
                                            <FormControl>
                                                <Input placeholder="Last Name" type="text"  {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    </LabelInputContainer>
                                )}
                            />
                        </div>
                        <FormField
                            control={form.control}
                            name="phonenumber"
                            render={({ field }) => (
                                <LabelInputContainer className="mb-4">
                                    <FormItem>
                                        <FormLabel>
                                            Contact Number
                                        </FormLabel>
                                        <FormControl>
                                            <Input id="phonenumber" placeholder='98XXXXXXXX' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </LabelInputContainer>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <LabelInputContainer className="mb-4">
                                    <FormItem>
                                        <FormLabel>
                                            Email Address
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder='youremail@mail.com' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </LabelInputContainer>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="appointmentDate"
                            render={({ field }) => (
                                <LabelInputContainer className="mb-4">
                                    <FormItem className="flex flex-col w-full">
                                        <FormLabel>
                                            Please Pick a date for our Appointment
                                        </FormLabel>
                                        <Popover >
                                            <FormControl>
                                                <motion.div>
                                                    <PopoverTrigger className='hover:bg-background' asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm
                                                               placeholder:text-muted dark:placeholder-text-neutral-600
                                                              focus-visible:outline-none focus-visible:ring-[2px] text-left pl-3 font-normal focus-visible:ring-accent dark:focus-visible:ring-neutral-600
                                                               disabled:cursor-not-allowed disabled:opacity-50
                                                               dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
                                                               group-hover/input:shadow-none transition duration-400 hover:bg-background hover:text-foreground
                                                               `,
                                                                !field.value && "text-muted-foreground"
                                                            )}

                                                        >
                                                            {field.value ? (
                                                                format(field.value, "PPP")
                                                            ) : (
                                                                <span>Pick a date</span>
                                                            )}
                                                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                                        </Button>
                                                    </PopoverTrigger>
                                                </motion.div>
                                            </FormControl>
                                            <PopoverContent className="w-auto p-0" align="start">
                                                <Calendar
                                                    mode="single"
                                                    selected={field.value}
                                                    onSelect={field.onChange}
                                                    disabled={(date) =>
                                                        date < new Date()
                                                    }
                                                    initialFocus
                                                />
                                            </PopoverContent>
                                        </Popover>
                                        <FormMessage />
                                    </FormItem>
                                </LabelInputContainer>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <LabelInputContainer className="mb-4">
                                    <FormItem>
                                        <FormLabel>
                                            Your message:
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                placeholder="I want to have a hair treatment..."
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </LabelInputContainer>
                            )}
                        />
                        <Button
                            className="relative group/btn w-full font-medium hover:bg-card"
                            type="submit"
                        >
                            {
                                submitting
                                    ? "Submitting..."
                                    : "Book An Appointment"
                            }
                            <BottomGradient />
                        </Button>
                        <span className='text-muted text-xs'>We will never share your information with anyone.</span>
                    </form>
                </Form>
            </div>
        </div>
    )
}
const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-secondary to-transparent" />
        </>
    );
};
const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
export default BookingForm

