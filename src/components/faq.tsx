import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import H3 from "./h3";
import P from "./p";

const faqs = [
  {
    question: "How long does the window tinting process take?",
    answer:
      "The window tinting process typically takes between 2 to 4 hours, depending on the size and model of your vehicle.",
  },
  {
    question: "Is the tinting service legal in Texas?",
    answer:
      "Our window tinting services comply with Texas state laws. We use high-quality tints that meet the legal requirements for vehicle tinting in Texas.",
  },
  {
    question: "How long does the paint protection last?",
    answer:
      "Our paint protection services provide long-lasting protection for your vehicle. The results typically last 2 to 5 years, depending on the type of protection applied and care taken by the vehicle owner.",
  },
  {
    question: "What is ceramic coating, and how does it help my vehicle?",
    answer:
      "Ceramic coating creates a hydrophobic layer that repels water, dirt, and other contaminants, making it easier to clean and maintain your vehicle. It also provides additional protection from scratches, UV rays, and chemical stains.",
  },
  {
    question: "Can I drive my vehicle immediately after the service?",
    answer:
      "For most services, such as window tinting, you can drive your vehicle immediately after the service. However, for paint protection and ceramic coating, we recommend avoiding washing or exposing the vehicle to water for at least 48 hours to allow the coating to fully cure.",
  },
  {
    question: "What if I'm not satisfied with the result?",
    answer:
      "Your satisfaction is our priority. If you're not satisfied with the outcome, we will work with you to resolve the issue. We offer warranties on our services to ensure peace of mind.",
  },
  {
    question: "Do you offer mobile services or come to my location?",
    answer:
      "Currently, we do not offer mobile services. All services are performed at our state-of-the-art facility to ensure the best quality results.",
  },
];

export default function FAQSection() {
  return (
    <Accordion className="text-[#F8F8FF] m-4 md:m-12" type="single" collapsible>
      {faqs.map((faq, index) => (
        <AccordionItem
          className="group translate-all transform after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-500 hover:after:w-[100%] hover:after:animate-underline-expand"
          value={index.toString()}
          key={index}
        >
          <AccordionTrigger className="group-hover:text-yellow-500 transform transition-colors duration-500 ease-in-out">
            <H3 className="text-lg">{faq.question}</H3>
          </AccordionTrigger>
          <AccordionContent>
            <P>{faq.answer}</P>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
