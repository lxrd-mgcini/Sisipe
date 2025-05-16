import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <div className="sm: mt-8 bg-black px-4 py-8 text-white sm:px-8">
      <h3 className="text-2xl font-semibold">Sisipe</h3>

      <div className="mt-4 grid grid-cols-1 grid-rows-1 justify-evenly gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <p>
            Stay in touch to receive exclusive promotions, private salesand news
          </p>
          <div className="mt-4 flex flex-col sm:flex-row">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="border-[1px] border-white bg-transparent px-2 py-2"
            />
            <button className="bg-white px-4 py-2 text-black">Subscribe</button>
          </div>
          <p className="mt-4 text-xs text-white/70">
            By clicking the “Subscribe” button, you agree to the terms of use of
            the site.
          </p>

          <div className="mt-4 flex gap-4">
            <Instagram />
            <Facebook />
            <Twitter />
            <Youtube />
          </div>
        </div>

        <div className="grid justify-between gap-10 sm:grid-cols-3 sm:grid-rows-1 sm:justify-self-center lg:justify-self-center">
          <div>
            <h4 className="font-semibold">About Us</h4>
            <p className="font-light">About</p>
            <p className="font-light">Contact</p>
          </div>

          <div>
            <h4 className="font-semibold">Orders</h4>
            <p className="font-light">About</p>
            <p className="font-light">Contact</p>
          </div>

          <div>
            <h4 className="font-semibold">Legal</h4>
            <p className="font-light">About</p>
            <p className="font-light">Contact</p>
          </div>
        </div>

        <div className="lg: flex flex-col justify-self-start sm:justify-self-start md:justify-self-start lg:justify-self-end">
          <p className="font-semibold">Contact Us</p>
          <p className="font-light">
            Cnr 9th Avenue, J.M.Nkomo St,
            <br />
            Bulawayo <br />
            +263 712 345 6789 <br />
            info@sisipe.com
          </p>
        </div>
      </div>
    </div>
  );
}
