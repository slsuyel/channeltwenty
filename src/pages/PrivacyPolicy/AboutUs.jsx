const AboutUs = () => {
    return (
        <>
            <div
                className="container "
                style={{
                    fontFamily: "Sans-serif",
                    backgroundColor: "rgb(248,249,250)",
                    padding: 18,
                    color: "black"
                }}
            >
                <br />
                <h2 style={{ fontFamily: "Sans-serif", color: "black" }}>About Us !</h2>
                <h2 style={{ fontFamily: "Sans-serif", textAlign: "center" }}>
                    Welcome To <span id="W_Name1">Channeltwenty</span>
                </h2>
                <p>
                    <span id="W_Name2">Channeltwenty</span> is a Professional{" "}
                    <span id="W_Type1">News paper</span> Platform. Here we will only provide
                    you with interesting content that you will enjoy very much. We are
                    committed to providing you the best of{" "}
                    <span id="W_Type2">News paper</span>, with a focus on reliability and{" "}
                    <span id="W_Spec">News paper,Online portal</span>. we strive to turn our
                    passion for <span id="W_Type3">News paper</span> into a thriving website.
                    We hope you enjoy our <span id="W_Type4">News paper</span> as much as we
                    enjoy giving them to you.
                </p>
                <p>
                    I will keep on posting such valuable anf knowledgeable information on my
                    Website for all of you. Your love and support matters a lot.
                </p>
                <p style={{ fontWeight: "bold", textAlign: "center" }}>
                    Thank you For Visiting Our Site
                    <br />
                    <br />
                    <span
                        style={{
                            color: "blue",
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center"
                        }}
                    >
                        Have a great day !
                    </span>
                </p>
            </div>
            <br />
            <br />
        </>

    );
};

export default AboutUs;