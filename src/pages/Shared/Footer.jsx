import getgp from '../../assets/images/get-it-on-play.png'
const Footer = () => {

    return (
        <footer className="pt-5 ">

            <div className="row w-100 mx-auto" style={{ background: '#ffb5cc' }}>

                <div className="col-lg-3  mb-3 d-flex align-items-center justify-content-center order-lg-1 order-3">
                    <div className="text-center ">
                        <p className='fw-semibold mb-0'>Download Mobile App</p>
                        <a href="">
                            <img src={getgp} alt="get-it-on-play" draggable={false} width={150} />
                        </a>
                    </div>
                </div>

                <div className="col-lg-5 mb-3 mt-4 text-center order-lg-1 order-2">
                    <h5 className=' fw-bold'>ABOUT US</h5>
                    <h4>
                        সম্পাদক ও প্রকাশক: সোহেল শিকদার জুম্মান, <br />
                        নির্বাহী সম্পাদকঃ মোঃ ইসহাক <br />
                    </h4>
                    <p className="fs-5 m-0">  প্রকাশিত সংবাদ, কলাম, তথ্য, ছবি ইত্যাদি যথাযথ কর্তৃপক্ষের অনুমতি ছাড়া ব্যবহার করা কপিরাইট আইনে দণ্ডনীয় অপরাধ। অনুমোদন ছাড়া এর ব্যবহার পরিলক্ষিত হলে কর্তৃপক্ষ যথাযথ আইনী ব্যবস্থা গ্রহণ করবে।</p>

                </div>

                {/* in mobile----order 2 */}
                <div className="col-lg-4 mb-3 pt-2 order-lg-3 order-2 d-flex align-items-center justify-content-center">
                    <div className="text-center ">
                        <h5 className=' fw-bold'>Contact </h5>
                        <p className='fw-semibold mb-0'>01600321220-2, 02 226637122 </p>
                        <p className='fw-semibold mb-0'>admin@channeltwenty.com  <br /> infochanneltwenty@gmail.com</p>

                        <div
                            className="social-icons mx-auto"

                        >
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-facebook" aria-hidden="true" />
                            </a>
                            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-youtube" aria-hidden="true" />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter" aria-hidden="true" />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin" aria-hidden="true" />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram" aria-hidden="true" />
                            </a>
                        </div>

                    </div>

                </div>


            </div>






            <div className="text-center px-4 py-1" style={{ backgroundColor: '#f7ff1e' }}>
                @ {new Date().getFullYear()} www.channeltwenty.com. All rights reserved. Privacy Policy | Contact
            </div>
        </footer>
    );
};

export default Footer;