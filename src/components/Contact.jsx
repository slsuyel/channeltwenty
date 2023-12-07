
const Contact = () => {

    return (
        <div data-aos="fade-up"
        data-aos-anchor-placement="top-bottom" className="row container w-100 mx-auto mt-5 pt-5">
            <div className="col-md-6">
                <form>
                    <div className="form-group">
                        <label htmlFor="name">তোমার নাম *</label>
                        <input
                            type="text"
                            id="name"
                            required="required"
                            className="form-control my-1"
                        />
                    </div>
                    <div className="d-flex flex-wrap justify-content-between my-2">
                        <div className="form-group">
                            <label htmlFor="email">তোমার ইমেল *</label>
                            <input
                                type="email"
                                id="email"
                                required="required"
                                className="form-control my-1"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact">যোগাযোগ নম্বর *</label>
                            <input
                                type="text"
                                id="contact"
                                required="required"
                                className="form-control my-1"
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="subject">বিষয় *</label>
                        <input
                            type="text"
                            id="subject"
                            required="required"
                            className="form-control my-1"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">তোমার বার্তা *</label>
                        <textarea
                            id="message"
                            rows={5}
                            required="required"
                            className="form-control my-1"
                            defaultValue={""}
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn mt-2 text-white"
                        style={{ backgroundColor: "rgb(22, 2, 149)" }}
                    >
                        সেন্ড করো
                    </button>
                </form>
            </div>
            <div className="col-md-6">
                <div className="align-items-center d-flex justify-content-between">
                    <div>
                        <h1 className="fs-4">হেড অফিসের ঠিকানাঃ</h1>
                        <h5>৬১, দক্ষিন মালিবাগ,</h5> <h5>ঢাকা- ১২১৭</h5>
                        <h5>Phone: +8800000000000</h5>
                        <h5>Phone: +8800000000000</h5>
                    </div>
                    <div>
                        <img
                            src="https://cdn3.iconfinder.com/data/icons/customer-and-technical-support-set-1/64/_call_contact_us_customer_service_customer_support_helpline-11-512.png"
                            width="200px"
                            alt=""
                        
                            className="img-fluid"
                        />
                    </div>
                </div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.18784395416!2d90.41078231456152!3d23.740679984594184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b86023ce06ed%3A0x996ffa6238a6a471!2sPanjeree+Publications+Limited!5e0!3m2!1sbn!2sbd!4v1527654083278"
                        frameBorder={0}
                        allowFullScreen="allowfullscreen"
                        style={{
                            width: "100%",
                            border: "0px",
                            height: "191px",
                            marginTop: "13px",
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
