import Image from 'next/image';
const Footer = () => {
  return (
    <footer className="mb-12 bg-background">
      <div className="w-full p-4 py-6 mx-auto lg:py-8 ">
        <div className="flex flex-col lg:flex-row lg:justify-around">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.9602609843587!2d84.68854557554208!3d24.967466640967164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398d249da219e327%3A0xbd67d1c6617edd87!2sAKSHAR%20VIDYA%20GRIHA!5e0!3m2!1sen!2sin!4v1721629660356!5m2!1sen!2sin"
            style={{ border: 0 }}
            loading="lazy"
            className="lg:h-[450px] lg:w-[600px] w-full h-[300px]"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="flex flex-col gap-5 mt-4">
            <div>
              <h1 className="text-xl font-bold text-primary sm:text-2xl ">
                Contact Us!
              </h1>
              <div className="flex flex-col sm:gap-2 sm:grid sm:grid-cols-2">
                <div>
                  <h2 className="mt-5 text-lg font-bold sm:text-xl text-primary">
                    Address
                  </h2>
                  <p className="sm:text-lg text-secondary">
                    Akshar Vidya Griha
                  </p>
                  <p className="sm:text-lg text-secondary">
                    Dardha, Goh, Aurangabad
                  </p>
                  <p className="sm:text-lg text-secondary">Bihar 824203</p>
                </div>
                <div>
                  <h2 className="mt-3 text-lg font-bold sm:mt-5 sm:text-xl text-primary">
                    Phone
                  </h2>
                  <p className="sm:text-lg text-secondary">
                    7260891176 , 9162627452
                  </p>
                  <h2 className="text-lg font-bold sm:text-xl text-primary">
                    Email
                  </h2>
                  <p className="sm:text-lg text-secondary">
                    aksharvidyagriha3@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold sm:text-2xl text-primary">
                Follow Us!
              </h1>
              <div className="flex items-center justify-start gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100063727998924"
                  className="text-gray-500 hover:text-gray-900 "
                  target="_blank"
                >
                  <Image
                    src="/images/fb_logo.webp"
                    width={50}
                    height={50}
                    className="object-cover"
                  ></Image>
                  <span className="sr-only">Facebook page</span>
                </a>
                <a
                  href="https://x.com/GrihaVidya"
                  className="text-gray-500 hover:text-gray-900 "
                  target="_blank"
                >
                  <Image
                    src="/images/twitter_logo.avif"
                    className="object-cover"
                    width={25}
                    height={25}
                  ></Image>
                  <span className="sr-only">Twitter page</span>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCakFvkSNJU4OlPlGdQrtqyg"
                  className="text-gray-500 hover:text-gray-900 "
                  target="_blank"
                >
                  <Image
                    src="/images/yt_logo.png"
                    width={55}
                    height={55}
                    className="object-cover"
                  ></Image>
                  <span className="sr-only">Youtube page</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="text-center">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024 Akshar Vidya Griha. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
