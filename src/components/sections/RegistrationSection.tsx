
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { UserPlus } from "lucide-react";
import NextImage from 'next/image'; // Renamed to avoid conflict

const registrationFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters.").max(50, "Name must be at most 50 characters."),
  email: z.string().email("Please enter a valid email address."),
  gender: z.enum(["male", "female", "other"], { required_error: "Please select your gender." }),
  outfitDescription: z.string().min(10, "Outfit description must be at least 10 characters.").max(300, "Description too long."),
  guests: z.coerce.number().min(0).max(5).optional(),
});

type RegistrationFormValues = z.infer<typeof registrationFormSchema>;

const defaultValues: Partial<RegistrationFormValues> = {
  name: "",
  email: "",
  outfitDescription: "",
  guests: 0,
};

export default function RegistrationSection() {
  const { toast } = useToast();
  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: RegistrationFormValues) {
    // Here you would typically send data to a server
    console.log(data);
    toast({
      title: "Registration Successful!",
      description: `Thank you for registering, ${data.name}. We've sent a confirmation to ${data.email}.`,
      variant: "default", 
    });
    form.reset(); // Reset form after successful submission
  }

  return (
    <section id="register" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background/80">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:gap-8 lg:gap-12">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <UserPlus className="h-12 w-12 sm:h-16 sm:w-16 text-primary mx-auto md:mx-0 mb-3 sm:mb-4" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4 font-headline">
            Secure Your Spot
            </h2>
            <p className="text-base sm:text-lg text-foreground/80 mb-6 max-w-md mx-auto md:mx-0">
            Join us for an evening of splendor. Fill out the form to RSVP and let us know you're coming!
            </p>
            <div className="relative w-full max-w-md mx-auto md:max-w-none aspect-[3/2] sm:aspect-video rounded-lg shadow-xl overflow-hidden champagne-hover">
              <NextImage
                src="https://placehold.co/600x400/F7E7CE/5A4D41"
                alt="Elegant registration visual"
                layout="fill"
                objectFit="cover"
                data-ai-hint="event invitation elegant"
              />
            </div>
        </div>
        <div className="md:w-1/2 w-full max-w-lg mx-auto mt-8 md:mt-0">
            <Card className="shadow-2xl border-primary/20 bg-card">
            <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-2xl sm:text-3xl font-headline text-primary">Register for Owanbe Evening</CardTitle>
                <CardDescription className="text-sm sm:text-base text-foreground/70 mt-1">We can't wait to celebrate with you!</CardDescription>
            </CardHeader>
            <CardContent className="p-4 sm:p-6">
                <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
                    <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-sm sm:text-base">Full Name</FormLabel>
                        <FormControl>
                            <Input placeholder="e.g., Adaobi Chukwuma" {...field} className="bg-background/50 focus:bg-background text-sm sm:text-base"/>
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
                        <FormLabel className="text-sm sm:text-base">Email Address</FormLabel>
                        <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} className="bg-background/50 focus:bg-background text-sm sm:text-base"/>
                        </FormControl>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-sm sm:text-base">Gender</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger className="bg-background/50 focus:bg-background text-sm sm:text-base">
                                <SelectValue placeholder="Select your gender" />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                    <FormField
                    control={form.control}
                    name="outfitDescription"
                    render={({ field }) => (
                        <FormItem>
                        <FormLabel className="text-sm sm:text-base">Outfit Description</FormLabel>
                        <FormControl>
                            <Textarea
                            placeholder="Tell us a bit about your planned attire..."
                            className="resize-none bg-background/50 focus:bg-background text-sm sm:text-base"
                            {...field}
                            />
                        </FormControl>
                        <FormDescription className="text-xs sm:text-sm">
                            Share your style inspiration for the evening!
                        </FormDescription>
                        <FormMessage />
                        </FormItem>
                    )}
                    />
                     <FormField
                        control={form.control}
                        name="guests"
                        render={({ field }) => (
                            <FormItem>
                            <FormLabel className="text-sm sm:text-base">Number of Additional Guests (0-5)</FormLabel>
                            <FormControl>
                                <Input type="number" min="0" max="5" {...field} onChange={event => field.onChange(+event.target.value)}  className="bg-background/50 focus:bg-background text-sm sm:text-base" />
                            </FormControl>
                            <FormMessage />
                            </FormItem>
                        )}
                        />
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-base sm:text-lg py-3 sm:py-6">
                        RSVP Now
                    </Button>
                </form>
                </Form>
            </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
