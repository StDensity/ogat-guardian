import { Quote } from "lucide-react";

interface TestimonialProps {
  name: string;
  quote: string;
}

const Testimonial = (props: TestimonialProps) => {
  return (
    <div className="my-4 bg-gradient-to-b from-slate-200 to-blue-200 p-0.5 shadow-lg shadow-blue-100 rounded-lg">
      <div className="rounded-lg bg-gray-100 p-6">
        <div className="flex items-start gap-3">
          <Quote className="text-guardianBlue" size={24} />
          <div>
            <p className="text-lg font-medium text-gray-800">"{props.quote}"</p>
            <p className="mt-2 text-sm text-gray-600">- {props.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
