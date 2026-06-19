import { socialLinks } from "@/lib/socialLinks";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import SvgIcon from "@/components/SvgIcon/SvgIcon";

const Footer = () => {
  return (
    <footer
      className="
      flex
      flex-col
      lg:flex-row
      items-center
      justify-between

      gap-10
      lg:gap-8

      px-6
      sm:px-10
      md:px-16
      lg:px-22

      py-10
      "
    >
      {/* Text */}
      <div className="max-w-115">
        <Heading
          as="p"
          className="
          uppercase
          text-white

          text-center
          lg:text-left
          "
        >
          WOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NUNC
          VULPUTATE LIBERO, ET VELIT INTERDUM, AC.
        </Heading>
      </div>

      {/* Buttons */}
      <div
        className="
        flex
        flex-col
        sm:flex-row

        w-full
        sm:w-auto

        gap-4
        sm:gap-6
        "
      >
        <Button variant="solid" weight="font-medium" label="Buy Now" />

        <Button variant="outline" weight="font-medium" label="More info" />
      </div>

      {/* Social Icons */}
      <div
        className="
        flex
        flex-wrap

        justify-center
        lg:justify-end

        gap-5
        sm:gap-6
        "
      >
        {socialLinks.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
            className="
            flex
            items-center
            justify-center

            rounded-full

            transition-all
            duration-300

            hover:scale-110
            "
          >
            <SvgIcon name={name} size={36} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
