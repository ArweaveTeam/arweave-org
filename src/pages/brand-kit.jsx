import { Container } from '@/components/Container'
import Image from 'next/image'
import LogoType from '@/images/brand-kit/logotype.svg'
import Glyph from '@/images/brand-kit/glyph.svg'
import MinSize from '@/images/brand-kit/min-size.svg'
import Colours from '@/images/brand-kit/colours.png'
import SealW from '@/images/brand-kit/seal-white.svg'
import SealD from '@/images/brand-kit/seal-dark.svg'

export default function Use() {
  return (
    <>
      <section
        id="brand-kit"
        aria-label="Arweave Branding Guide"
        className="mb-16"
      >
        <Container className="relative z-10 ">
          <div className="mx-auto md:mx-0 md:pr-24">
            <h2 className="font-display text-4xl  tracking-tighter sm:text-5xl ">
              Arweave Branding Guide.
            </h2>
            <div className="grid gap-4 font-display text-xl tracking-tight md:grid-cols-4">
              <div className="mt-4 md:col-span-3">
                Our brand materials are open-source and registered under
                Creative Commons (BY-ND). You are free to use and distribute the
                original files on your project. However, as we want to keep our
                identity consistent, derivatives are currently not allowed.
              </div>
              <div className="mt-4 md:mx-auto">
                <a href="/brand-kit/ArweaveALL.zip" className="btn">
                  Download all Assets
                </a>
              </div>
            </div>
          </div>

          <h2 className="pt-10 font-display text-3xl tracking-tighter sm:text-3xl md:pt-20">
            Logotype.
          </h2>
          <div className="mx-auto pt-2 text-xl">
            <Image src={LogoType} alt="Arweave Logotype" />
            <p className="pt-4">
              <span className="mr-10">Download Logotype</span>
              <div className="md:inline">
                <a href="/brand-kit/LogotypeSVG.zip" className="btn md:mx-2">
                  SVG
                </a>
                <a href="/brand-kit/LogotypePNG.zip" className="btn mx-2">
                  PNG
                </a>
              </div>
            </p>
          </div>

          {/* Glyph */}
          <h2 className="pt-10 font-display text-3xl tracking-tighter sm:text-3xl md:hidden">
            Glyph.
          </h2>
          <div className="grid gap-4 md:grid-cols-5 md:pb-10 md:pt-20">
            <div className="pt-10 md:order-last md:col-span-2 md:mx-auto md:pt-2">
              <Image src={Glyph} alt="Arweave Glyph" />
            </div>
            <div className="md:col-span-3 lg:pt-5">
              <h2 className="hidden font-display text-3xl tracking-tighter sm:text-3xl md:block">
                Glyph.
              </h2>
              <p className="text-xl md:pt-6">
                Dimension: Stroke width equals n.
                <br />
                Gap between the glyph & the first alphabet equals 5n. Diameter
                of the glyph equals 13n.
                <br />
              </p>
              <p className="pt-5 text-xl">
                Glyph &#9424; in unicode is U+24D0.
              </p>
              <p className="pt-5 text-xl">
                <span className="mr-10">Download Glyph</span>
                <div className="md:inline">
                  <a href="/brand-kit/GlyphSVG.zip" className="btn md:mx-2">
                    SVG
                  </a>
                  <a href="/brand-kit/GlyphPNG.zip" className="btn mx-2">
                    PNG
                  </a>
                </div>
              </p>
            </div>
          </div>

          {/* Colours */}
          <h2 className="pt-10 font-display text-3xl tracking-tighter sm:text-3xl md:hidden">
            Minimum Size.
          </h2>
          <div className="grid gap-4 md:grid-cols-5 md:pt-10">
            <div className="pt-10 md:order-last md:col-span-2 md:mx-auto md:pt-5">
              <Image src={MinSize} alt="Minimum Size" className="max-h-80" />
            </div>
            <div className="md:col-span-3 lg:pt-5">
              <h2 className="hidden pt-10 font-display text-3xl tracking-tighter  sm:text-3xl md:block">
                Minimum Size.
              </h2>
              <p className="text-xl md:pt-6">
                To ensure the visibility and legibility of the logo, the minimum
                size of the combination of glyph and text is 85px and the glyph
                is 15px.
              </p>
            </div>
          </div>

          {/* Colours */}
          <h2 className="pt-10 font-display text-3xl tracking-tighter sm:text-3xl md:hidden">
            Colours.
          </h2>
          <div className="grid gap-4 md:grid-cols-5 md:pb-10 md:pt-5">
            <div className="md:order-last md:col-span-2 md:mx-auto md:pt-20">
              <Image src={Colours} alt="Colours" />
            </div>
            <div className="md:col-span-3">
              <h2 className="hidden pt-10 font-display text-3xl tracking-tighter  sm:text-3xl md:block">
                Colours.
              </h2>
              <p className="text-xl md:pt-6">
                Black: hex #222326, rgb(34,35,38) <br />
                White: hex #FFFFFF, rgb(255, 255, 255) <br />
                Orange: hex #d55e2d, rgb(214, 94, 45)
              </p>
            </div>
          </div>

          <h2 className="pt-10 font-display text-3xl tracking-tighter sm:text-3xl md:pt-20">
            Font Family.
          </h2>
          <p className="pt-6 text-xl">
            The primary font family used in the Arweave branding are:
            <br />
            <br />
            <a
              href="https://fonts.google.com/specimen/Roboto+Mono"
              target="_blank"
              rel="noreferrer"
              className="block underline"
            >
              Roboto Mono (click to download)
            </a>
            <a
              href="https://fonts.google.com/specimen/Work+Sans"
              target="_blank"
              rel="noreferrer"
              className="block underline"
            >
              Work Sans (click to download)
            </a>
          </p>

          {/* Seal */}
          <h2 className="pt-10 font-display text-4xl tracking-tighter sm:text-5xl md:pt-20">
            Arweave Seal.
          </h2>
          <div className="grid gap-4 md:grid-cols-5 md:pb-10">
            <div className="md:order-last md:col-span-2 md:mx-auto md:pt-2">
              <Image src={SealW} alt="Arweave Seal" />
              <Image src={SealD} alt="Arweave Seal" />
            </div>
            <div className="md:col-span-3 lg:mt-4">
              <p className="text-xl">
                The permanent seal comes in two versions: white and dark grey.
                The label and can be placed on a dark, light or grey background
                and should always locate at the bottom left of the screen. Below
                are the CSS values that can be applied to ensure the correct
                placement.
              </p>
              <p className="pt-5 text-xl">
                CSS:
                <br />
                position: absolute;
                <br />
                z-index: 9999; (make sure it always on top)
                <br />
                box-shadow: 1px 1px 1px rgba(0,0,0,0.025);
              </p>
              <p className="pt-5 text-xl">
                <span className="mr-10">Download Arweave Seal</span>
                <div className="md:inline">
                  <a
                    href="/brand-kit/ArweaveSealSVG.zip"
                    className="btn md:mx-2"
                  >
                    SVG
                  </a>
                  <a href="/brand-kit/ArweaveSealPNG.zip" className="btn mx-2">
                    PNG
                  </a>
                </div>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
