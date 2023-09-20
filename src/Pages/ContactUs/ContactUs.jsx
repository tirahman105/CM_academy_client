import { CiLocationOn, CiMail } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import { useRef } from "react";
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h9xcrof",
        "template_gjve0wg",
        form.current,
        "k1kcuEGt4nta6swvD"
      )
      .then(
        (result) => {
          console.log(result);
          if (result.text === "OK") {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Send Successfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="css-selector pt-24 ">
      <h2 className="text-center text-4xl font-bold">Contact Us</h2>
      <div className="flex flex-col gap-10 lg:flex-row-reverse w-3/5 mx-auto">
        <div className="text-center lg:text-left bg-[#1bbf721f]  border-2 border-[#1bbf7283]rounded-md p-5 mt-10  h-3/5">
          <h1 className="text-2xl font-bold">Get in touch</h1>
          <p className="py-6">
          The future of education is here, <br /> unlock your full potential with CM-Academy!
          </p>
          <div>
            <div className="flex gap-5 items-center">
              <div className="bg-[#1BBF72] rounded-full w-10 h-10 flex justify-center items-center text-white font-bold">
                <CiLocationOn></CiLocationOn>{" "}
              </div>
              <div>
                <p className="text-start font-bold">Address</p>
                <p>721 Bangladesh BD 10016</p>
              </div>
            </div>
            <div className="flex mt-4 gap-5 items-center">
              <div className="bg-[#1BBF72] rounded-full w-10 h-10 flex justify-center items-center text-white font-bold">
                <AiOutlinePhone></AiOutlinePhone>{" "}
              </div>
              <div>
                <p className="text-start font-bold">Phone</p>
                <p>+880 179 9959 0273</p>
              </div>
            </div>

            <div className="flex gap-5 mt-4 items-center">
              <div className="bg-[#1BBF72] rounded-full w-10 h-10 flex justify-center items-center text-white font-bold">
                <CiMail></CiMail>{" "}
              </div>
              <div>
                <p className="text-start font-bold">Email</p>
                <p>721 Bangladesh BD 10016</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-3/5 ">
          <div className="card-body">
            <h1 className="text-2xl font-bold ">Have a Question?</h1>
            <p className="py-2">
            We value your feedback, questions, and suggestions, and our dedicated team is here to assist you every step of the way. Whether you're interested in our courses, have technical inquiries, or want to provide feedback, please don't hesitate to contact us. We look forward to hearing from you and helping you on your educational journey!
            </p>
            <form action="" ref={form} onSubmit={sendEmail}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                  name="from_name" required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="input input-bordered"
                  name="from_email" required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Message</span>
                </label>
                <textarea
                  type="text"
                  placeholder="Your Message Here"
                  className="input input-bordered h-24"
                  name="message" required
                />
              </div>
              {/* <div className=" flex gap-2 ">
                <input type="checkbox" name="" id="" className="mb-2" />
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolores, molestiae!
                </p>
              </div> */}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Send Message"
                  className="bg-[#1BBF72] text-white p-2 rounded-full w-40"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ContactUs;
