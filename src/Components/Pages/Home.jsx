import img1 from '../../assets/Home_page/backdrop.png';
import img_home1 from '../../assets/Home_page/img1_home.png';

function Home() {
  return (
    <div className="w-[1440px] h-[2098px] relative bg-white">
      
      {/* Backdrop Image */}
      <img className="w-[1399px] h-[527px] left-[20px] top-[136px] absolute rounded-[20px]" src="https://via.placeholder.com/1399x527" alt="Backdrop" />

      {/* Header Text */}
      <div className="left-[73px] top-[281px] absolute text-center text-white text-5xl font-bold font-['Inter'] leading-[72px]">
        Traditional Concepts
      </div>
      <div className="left-[73px] top-[342px] absolute text-center text-[#ff6a00] text-4xl font-bold font-['Inter'] leading-[54px]">
        Beyond Limits
      </div>
      <div className="w-[456px] h-[89px] left-[73px] top-[400px] absolute text-white text-lg font-normal font-['Inter'] leading-[27px]">
        Release of Letraset sheets containing Lorem Ipsum passages, and more recently
      </div>

      {/* Description Section */}
      <div className="w-[187px] h-5 left-[626px] top-[732px] absolute text-center text-black/80 text-xl font-bold font-['Inter'] leading-[30px]">
        Description
      </div>
      <div className="w-[1324px] h-52 left-[58px] top-[815px] absolute text-center text-black text-lg font-normal font-['Inter'] leading-[27px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including.
      </div>

      {/* Main Image */}
      <div className="w-[318px] h-5 left-[780px] top-[1039px] absolute text-center">
        <span className="text-black/80 text-xl font-bold font-['Inter'] leading-[30px]">Traditional</span>
        <span className="text-black/30 text-xl font-bold font-['Inter'] leading-[30px]">Concepts</span>
      </div>

      {/* Image 1 */}
      <img className="w-[362px] h-[524px] left-[175px] top-[1049px] absolute rounded-3xl" src="https://via.placeholder.com/362x524" alt="Home Image 1" />

      {/* Decorative Backgrounds */}
      <div className="w-[1385px] h-[196px] left-[27px] top-[778px] absolute bg-[#d9d9d9]/30 rounded-[22px]" />

      {/* Small Decorative Circles */}
      <div className="w-[123px] h-[123px] left-[712px] top-[1117px] absolute bg-[#d9d9d9]/50 rounded-2xl" />
      <div className="w-[123px] h-[123px] left-[1041px] top-[1117px] absolute bg-[#d9d9d9]/50 rounded-2xl" />
      <div className="w-[123px] h-[123px] left-[712px] top-[1385px] absolute bg-[#d9d9d9]/50 rounded-2xl" />
      <div className="w-[123px] h-[123px] left-[1041px] top-[1385px] absolute bg-[#d9d9d9]/50 rounded-2xl" />

      {/* Icons */}
      <img className="w-[91px] h-[91px] left-[728px] top-[1133px] absolute" src="https://via.placeholder.com/91x91" alt="Image 1" />
      <img className="w-[91px] h-[91px] left-[1057px] top-[1133px] absolute" src="https://via.placeholder.com/91x91" alt="Image 2" />
      <img className="w-[88px] h-[88px] left-[730px] top-[1403px] absolute" src="https://via.placeholder.com/88x88" alt="Image 3" />
      <img className="w-[85px] h-[85px] left-[1060px] top-[1404px] absolute" src="https://via.placeholder.com/85x85" alt="Image 4" />

      {/* Text for Icons */}
      <div className="left-[737px] top-[1260px] absolute text-center text-black text-lg font-medium font-['Inter'] leading-[27px]">Tradition</div>
      <div className="left-[1059px] top-[1260px] absolute text-center text-black text-lg font-medium font-['Inter'] leading-[27px]">Tradition</div>
      <div className="left-[1059px] top-[1530px] absolute text-center text-black text-lg font-medium font-['Inter'] leading-[27px]">Tradition</div>
      <div className="left-[737px] top-[1530px] absolute text-center text-black text-lg font-medium font-['Inter'] leading-[27px]">Tradition</div>

      {/* Subtext under Icons */}
      <div className="left-[679px] top-[1282px] absolute text-center text-black/50 text-sm font-normal font-['Inter'] leading-[21px]">It is a long established fact that</div>
      <div className="left-[1001px] top-[1282px] absolute text-center text-black/50 text-sm font-normal font-['Inter'] leading-[21px]">It is a long established fact that</div>
      <div className="left-[1001px] top-[1552px] absolute text-center text-black/50 text-sm font-normal font-['Inter'] leading-[21px]">It is a long established fact that</div>
      <div className="left-[679px] top-[1552px] absolute text-center text-black/50 text-sm font-normal font-['Inter'] leading-[21px]">It is a long established fact that</div>

    </div>
  );
}

export default Home;
