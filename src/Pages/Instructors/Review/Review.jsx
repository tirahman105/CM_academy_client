import Slider from "../Slider/Slider";

const Review = () => {
  const items = [
    {
      imageUrl: 'https://i.ibb.co/fNNjqRr/FB-IMG-1691754009741-removebg.png',
      caption: '“I’m proud to wake up knowing my work is helping people around the world improve their careers and build great things. While being a full-time instructor is hard work, it lets you work when, where, and how you want.”',
      name: "Sabbir Ahmed Shaon",
      position:"Error Solver, Chat Gpt Boss"
    },
    {
        imageUrl: 'https://cdn.discordapp.com/attachments/1139410376035930184/1139410449444642996/186503160_10219069026867086_5494482271146422387_n-removebg-preview.png',
        caption: '“Teaching on CM Academy has provided me with two important elements: the opportunity to reach more learners than I ever would be able to on my own and a steady stream of extra income.”',
        name:"Md. Tareq Ibna Rahman",
        position:"Leadership, Communication"
      },

      {
        imageUrl: 'https://i.ibb.co/xs3q0Nt/12011132-removebg-preview-removebg-preview.png',
        caption: '“Teaching on CM Academy has provided me with two important elements: the opportunity to reach more learners than I ever would be able to on my own and a steady stream of extra income.”',
        name:"Azmal Gazi",
        position:"Html Developer, Lazy Developer"
      },

      {
        imageUrl: 'https://i.ibb.co/S7ks3DW/1.png',
        caption: '“Teaching on CM Academy has provided me with two important elements: the opportunity to reach more learners than I ever would be able to on my own and a steady stream of extra income.”',
        name:"Md. Raqibur Rahman Roni",
        position:"Genius Programmer,Debuging"
      },


      {
        imageUrl: 'https://i.ibb.co/Hq991Jt/photovebg-preview.png',
        caption: '“Teaching on CM Academy has provided me with two important elements: the opportunity to reach more learners than I ever would be able to on my own and a steady stream of extra income.”',
        name:"Tayeb Hossain",
        position:"Lazy Programmer, Technical"
      },

      {
        imageUrl: 'https://i.ibb.co/mRrcJGr/Crop-Asif-removebg-preview.png',
        caption: '“Teaching on CM Academy has provided me with two important elements: the opportunity to reach more learners than I ever would be able to on my own and a steady stream of extra income.”',
        name:"Samsul Alam Asif",
        position:"Programmer Boos, Technical"
      },
    // Add more items as needed
  ];

  return (
    <div className="container mx-auto py-8">
      <Slider items={items} />
    </div>
  );
};

export default Review;