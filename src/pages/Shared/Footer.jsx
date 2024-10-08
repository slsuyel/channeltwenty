import getgp from '../../assets/images/get-it-on-play.png';
import getapp from '../../assets/images/get-it-on-apple.png';
import footerImg from '../../assets/images/footer-logo.png';

import SocialIconsMenu from '../../components/SocialIconsMenu';
import { Link } from 'react-router-dom';
import { convertToBanglaYear } from '../../utils/convertToBanglaYear';
const Footer = () => {
  return (
    <footer className="pt-3  w-100 mx-auto " style={{ background: '#f7baba' }}>
      <div className="row w-100 mx-auto">
        <div className="col-md-2 my-auto text-center">
          <img src={footerImg} alt="footerImg" width={100} />
        </div>

        <div className="col-md-3 my-auto ">
          <h5 className="editor-name">প্রধান উপদেষ্টাঃ এড. সেলিম সরকার</h5>
          <h5 className="editor-name">সম্পাদকঃ সোহেল শিকদার জুম্মান</h5>
          <h5 className="editor-name">প্রকাশকঃ মোঃ ইসহাক</h5>
        </div>

        <div className="col-md-4 my-auto footer-div">
          <p className="m-0 ">
            {' '}
            প্রকাশিত সংবাদ, কলাম, তথ্য, ছবি ইত্যাদি যথাযথ কর্তৃপক্ষের অনুমতি
            ছাড়া ব্যবহার করা কপিরাইট আইনে দণ্ডনীয় অপরাধ। অনুমোদন ছাড়া এর
            ব্যবহার পরিলক্ষিত হলে কর্তৃপক্ষ যথাযথ আইনী ব্যবস্থা গ্রহণ করবে।
          </p>
        </div>

        <div className="col-md-3 my-auto ">
          <div className="text-center ">
            <SocialIconsMenu />
            <p className="fw-semibold mb-0">Download Mobile App</p>
            <div className="d-flex gap-2 justify-content-center ">
              <a href="">
                <img
                  src={getgp}
                  alt="get-it-on-play"
                  draggable={false}
                  width={150}
                />
              </a>
              <a href="">
                <img
                  src={getapp}
                  alt="get-it-on-play"
                  draggable={false}
                  width={150}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="align-items-center d-flex flex-wrap text-white justify-content-between px-2 py-1 "
        style={{ backgroundColor: '#EC1E24' }}
      >
        <div className="align-items-baseline d-flex flex-wrap justify-content-center ">
          <h6 className="text-white mb-0">
            কপিরাইট © {convertToBanglaYear(new Date().getFullYear())} সকল স্বত্ব
            www.channeltwenty.com সংরক্ষিত{' '}
          </h6>

          <Link
            to="/about"
            className="border border-2 border-bottom-0 border-top-0 border-white mx-2 px-2 text-decoration-none text-white"
          >
            আমাদের সম্পর্কে
          </Link>
          <Link
            to="/privacy-policy"
            className="border border-2 border-start-0  border-bottom-0 border-top-0 border-white pe-2 text-decoration-none text-white"
          >
            গোপনীয়তা নীতি
          </Link>

          {/* <Link
            to="/contact"
            className="ps-2 text-decoration-none text-white border border-2 border-start-0  border-bottom-0 border-top-0 border-white pe-2"
          >
            যোগাযোগ
          </Link> */}
          <Link to="/admin" className="ps-2 text-decoration-none text-white ">
            Admin
          </Link>
        </div>
        <div className="">
          Developed by{' '}
          <Link
            target="_blank"
            to="http://www.codecursor.com"
            className=" text-decoration-none text-white "
          >
            Code Cursor{' '}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
