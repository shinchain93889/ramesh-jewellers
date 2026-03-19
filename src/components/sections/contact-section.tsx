
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Inquiry Sent",
      description: "We've received your message and will get back to you shortly.",
    });
    form.reset();
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-16 items-start">
          <div className="space-y-10 md:space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-foreground text-center lg:text-left">
                <span className="gold-gradient underline decoration-primary underline-offset-[12px]">
                  Visit Our Showroom
                </span>
              </h2>
              <p className="text-muted-foreground max-w-md text-base sm:text-lg leading-relaxed text-center lg:text-left mx-auto lg:mx-0">
                Experience luxury in person. Our experts are ready to assist you in finding your next heirloom.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg">Address</h4>
                  <p className="text-muted-foreground">Transit Camp (Rudrapur), Shamshan Ghat Road,<br />Udham Singh Nagar</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg">Phone</h4>
                  <p className="text-muted-foreground break-words">+91 97207 98940</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg">Email</h4>
                  <p className="text-muted-foreground break-words">ramesh.mourya.ji222@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary shrink-0">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div>
                  <h4 className="font-headline font-bold text-lg">Business Hours</h4>
                  <p className="text-muted-foreground">Sun - Sat: 9:00 AM - 9:00 PM<br />Monday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-6 sm:p-8 md:p-12 shadow-2xl rounded-sm border border-primary/20">
            <h3 className="text-xl sm:text-2xl font-headline font-bold mb-6 sm:mb-8 text-foreground text-center">Inquiry Form</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your name"
                          {...field}
                          className="rounded-sm border border-border bg-background focus-visible:ring-0 focus-visible:border-primary transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="name@example.com"
                          {...field}
                          className="rounded-sm border border-border bg-background focus-visible:ring-0 focus-visible:border-primary transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+91"
                          {...field}
                          className="rounded-sm border border-border bg-background focus-visible:ring-0 focus-visible:border-primary transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Your Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about the piece you're looking for..."
                          {...field}
                          className="rounded-sm border border-border bg-background min-h-[120px] focus-visible:ring-0 focus-visible:border-primary transition-colors"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-none py-6 uppercase tracking-widest font-bold text-sm shadow-lg transition-transform hover:scale-[1.02]">
                  Send Inquiry
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
