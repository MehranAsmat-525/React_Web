import "./Contact.css";

export default function Contact() {
    return (
        <>
            <section id="contact">
                <div className="container">
                    <div className="contact_wrapper">
                        <div className="contact_col">
                            <div className="contact_image">
                                <img src="contact.jpg" alt="Contact" />
                            </div>
                        </div>
                        <div className="contact_col">
                            <h2>Contact US</h2>
                            <form>
                                <div className="input_wrapper">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Name..."
                                    />
                                </div>
                                <div className="input_wrapper">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Your Phone..."
                                    />
                                </div>
                                <div className="input_wrapper">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Your Email..."
                                    />
                                </div>
                                <div className="input_wrapper">
                                    <textarea placeholder="Write a Message..."></textarea>
                                </div>
                                <div className="btn_wrapper">
                                    <button type="submit" className="btn">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
