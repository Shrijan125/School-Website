import AboutUs from '@/components/AboutUs/AboutUs';
import Announcements from '@/components/Announcements/Announcements';
import Mansonry from '@/components/Mansonry/Mansonry';
import Messages from '@/components/Messages/Messages';
import OurSpecialities from '@/components/OurSpecialities/OurSpecialities';
import SlideShow from '@/components/SlideShow/SlideShow';
import Footer from '@/components/Footer/Footer';

export default function Home() {
  return (
    <main className="w-screen h-screen">
      <SlideShow></SlideShow>
      <Announcements></Announcements>
      <AboutUs></AboutUs>
      <Messages
        designation={'Director'}
        image={'/images/directorsimage.jpg'}
        name={'Abhimanyu Kr. Singh'}
        message={
          'Welcome to Akshar Vidya Griha! Since our inception in 2011, we have been committed to providing quality education and nurturing young minds in rural Bihar.'
        }
        linecolor={'bg-linered'}
        imgColor={'#2e8fd9'}
      ></Messages>
      <Messages
        designation={'Principal'}
        image={'/images/principlasimg.jpeg'}
        name={'Dharmendra Kumar'}
        message={
          'Welcome to Akshar Vidya Griha! Since our inception in 2011, we have been committed to providing quality education and nurturing young minds in rural Bihar.'
        }
        linecolor={'bg-lineblue'}
        imgColor={'#DB234E'}
      ></Messages>
      <OurSpecialities></OurSpecialities>
      <Mansonry></Mansonry>
      <hr className="mt-10"></hr>
      <Footer></Footer>
    </main>
  );
}
