import Image from "next/image";
import { DecorData, ArtistData } from "@/app/components/scripts/decors";

const decors = DecorData
const artists = ArtistData

export function ArtistDecors() {
    return decors[0]?.decors.map((item, i) => {
      return (
        <main key={i}>
        <div key="item">
          <div className="image-wrapper">
            <Image
              className="frame"
              src={`public/images/${i}.png`}
              alt="Discord Logo"
            ></Image>
            <Image
              className="default-profile"
              src={"public/images/discordlogo.png"}
              alt="Discord Logo"
            ></Image>
          </div>
        </div>
        </main>
      );
    });
  }

export function ArtistDecorGallery() {
  return artists[0]?.artists.map((item, i) => {
    return (
      <main key={i}>
        <ArtistDecors item={item}></>
      </main>
    );
  });
}

