import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../Components/ui/tabs";
import { Button } from "../Components/ui/button";
import { Input } from "../Components/ui/input";
import { Textarea } from "../Components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../Components/ui/select";
import { CheckCircle, Paperclip } from "lucide-react";

function Contact() {
  // const [selectedFile, setSelectedFile] = useState(null);

  return (
    <div className="min-h-screen pt-[100px] bg-[#121212] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-6 relative">
            <div className="relative z-10">
              <h1 className="text-5xl font-bold mb-2">How can we help?</h1>
              <h2 className="text-5xl font-bold mb-6">Let's work together.</h2>
              <p className="text-gray-400 text-lg">
                Working together takes some practice to get in sync, but once we
                find our rhythm, the result can be magical!
              </p>
            </div>
            <div className="absolute inset-0 opacity-30">
              {/* Stars background pattern */}
              <div className="absolute h-2 w-2 bg-white rounded-full top-12 left-24" />
              {/* <div className="absolute h-2 w-2 bg-white rounded-full top-36 right-12" /> */}
              <div className="absolute h-2 w-2 bg-white rounded-full bottom-24 left-48" />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <h3 className="text-gray-400 mb-2">What are you looking for?</h3>
              <p className="text-sm text-gray-500">
                Please choose an option below
              </p>
            </div>

            <Tabs defaultValue="quote" className="space-y-8">
              <TabsList className="w-full flex flex-col gap-3 md:grid md:grid-cols-3 bg-transparent h-auto p-0">
                <TabsTrigger
                  value="quote"
                  className="w-full flex flex-col items-start p-4 rounded-lg bg-[#1a1a1a] border border-transparent data-[state=active]:border-yellow-500"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-5 h-5 text-yellow-500" />
                    <span>Get a quote</span>
                  </div>
                  <span className="text-sm text-gray-400">
                    For new projects
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="apply"
                  className="w-full flex flex-col items-start p-4 rounded-lg bg-[#1a1a1a] border border-transparent data-[state=active]:border-yellow-500"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-5 h-5 text-yellow-500" />
                    <span>Apply to position</span>
                  </div>
                  <span className="text-sm text-gray-400">
                    Be part of the team
                  </span>
                </TabsTrigger>
                <TabsTrigger
                  value="talk"
                  className="w-full flex flex-col items-start p-4 rounded-lg bg-[#1a1a1a] border border-transparent data-[state=active]:border-yellow-500"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle className="w-5 h-5 text-yellow-500" />
                    <span>Talk to us</span>
                  </div>
                  <span className="text-sm text-gray-400">
                    General enquiries
                  </span>
                </TabsTrigger>
              </TabsList>

              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Name"
                  className="bg-[#1a1a1a] border-0 h-12 text-white placeholder:text-gray-500"
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  className="bg-[#1a1a1a] border-0 h-12 text-white placeholder:text-gray-500"
                />

                <TabsContent value="quote" className="space-y-4 mt-4">
                  <Select>
                    <SelectTrigger className="bg-[#1a1a1a] border-0 h-12 text-gray-400">
                      <SelectValue placeholder="Budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Less than ₹25k</SelectItem>
                      <SelectItem value="medium">₹25k - ₹40k</SelectItem>
                      <SelectItem value="large">₹40k - ₹80k</SelectItem>
                      <SelectItem value="enterprise">₹80k+</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="Message"
                    className="min-h-[120px] bg-[#1a1a1a] border-0 text-white placeholder:text-gray-500"
                  />
                </TabsContent>

                <TabsContent value="apply" className="space-y-4 mt-4">
                  <Select>
                    <SelectTrigger className="bg-[#1a1a1a] border-0 h-12 text-gray-400">
                      <SelectValue placeholder="Position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="developer">Developer</SelectItem>
                      <SelectItem value="designer">Designer</SelectItem>
                      <SelectItem value="manager">Project Manager</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea
                    placeholder="Message"
                    className="min-h-[120px] bg-[#1a1a1a] border-0 text-white placeholder:text-gray-500"
                  />
                </TabsContent>

                <TabsContent value="talk" className="space-y-4 mt-4">
                  <Textarea
                    placeholder="Message"
                    className="min-h-[120px] bg-[#1a1a1a] border-0 text-white placeholder:text-gray-500"
                  />
                </TabsContent>
              </div>
            </Tabs>

            <div className="space-y-4 pt-4">
              <Button className="w-auto h-12 px-6 bg-white text-black hover:bg-white/90 rounded-full">
                Send message
                <span className="ml-2">→</span>
              </Button>
              <div className="text-sm">
                <span className="text-gray-400">Wan't to contact? </span>
                <a
                  href="mailto:hello@significa.co"
                  className="text-white hover:underline"
                >
                  info@dumbledoremedia.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
