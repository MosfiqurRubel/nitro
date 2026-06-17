import { socialLinks } from "@/lib/socialLinks";
import Heading from "@/components/ui/Heading";
import Button from "@/components/ui/Button";
import SvgIcon from "@/components/SvgIcon/SvgIcon";

const Footer = () => {
  return (
    <footer className="flex max-lg:flex-col lg:justify-between items-center px-22 pt-8 pb-11 max-lg:space-y-8">
      <div className="max-w-116">
        <Heading as="p" className="uppercase text-white max-lg:text-center">
          WOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. NUNC
          VULPUTATE LIBERO, ET VELIT INTERDUM, AC.
        </Heading>
      </div>

      <div className="flex gap-8">
        <Button variant="solid" weight="font-medium" label="Buy Now" />
        <Button variant="outline" weight="font-medium" label="More info" />
      </div>

      <div className="flex gap-8">
        {socialLinks.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={name}
            className="
          flex-center
          rounded-full
          transition-all
          duration-300
          hover:scale-110
          "
          >
            <SvgIcon name={name} size={42} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
