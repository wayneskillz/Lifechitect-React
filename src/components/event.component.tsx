import React from 'react';

const EventSection = () => {
    return (
        <section className="event">
            <div className="event_content row justify-content-center">
                <div className="col-12">
                    <h3 className="header-3 text-center">
                       What is Lifechitect?
                </h3>
                    <p className="bodyText text-center">
                        Lifechitect is an activity tracking app that uses event categories to help you organize your tracked activities.
                        It makes use of data analytics to provide you with insights into your current lifestyle.
                        {/* We created time budget categories to help you organize your tracked activities. They also give you a clear picture of your current lifestyle and the ability to design your ideal lifestyle. */}
                </p>
                    <div className="scrolling-wrapper">
                        <div className="card">
                            <div className="card_illustration one">
                                <img src="svgs/work&business.svg" alt="Illustration" />
                            </div>
                            <div className="card_text">
                                <h4 className="card_text_header header-3">Work & Business</h4>
                                <div className="card_text_details d-flex">
                                    <div className="left">
                                        <p className="header">Target:</p>
                                        <p className="body">
                                            40+ hrs<br />
                                        per week
                                    </p>
                                    </div>
                                    <div className="right">
                                        <p className="header">Benefit:</p>
                                        <p className="body">
                                            Income<br />
                                        Generation
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_illustration two">
                                <img src="svgs/career.svg" alt="Illustration" />
                            </div>
                            <div className="card_text">
                                <h4 className="card_text_header header-3">Career Development</h4>
                                <div className="card_text_details d-flex">
                                    <div className="left">
                                        <p className="header">Target:</p>
                                        <p className="body">
                                            5+ hrs<br />
                                        per week
                                    </p>
                                    </div>
                                    <div className="right">
                                        <p className="header">Benefit:</p>
                                        <p className="body">
                                            Value<br />
                                        Creation
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_illustration three">
                                <img src="svgs/pers.svg" alt="Illustration" />
                            </div>
                            <div className="card_text">
                                <h4 className="card_text_header header-3">Personal Development</h4>
                                <div className="card_text_details d-flex">
                                    <div className="left">
                                        <p className="header">Target:</p>
                                        <p className="body">
                                            5+ hrs<br />
                                        per week
                                    </p>
                                    </div>
                                    <div className="right">
                                        <p className="header">Benefit:</p>
                                        <p className="body">
                                            Emotional <br/> & Mental Energy
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_illustration four">
                                <img src="svgs/spiritually1.svg" alt="Illustration" />
                            </div>
                            <div className="card_text">
                                <h4 className="card_text_header header-3">Spiritual</h4>
                                <div className="card_text_details d-flex">
                                    <div className="left">
                                        <p className="header">Target:</p>
                                        <p className="body">
                                            7+ hrs<br />
                                        per week
                                    </p>
                                    </div>
                                    <div className="right">
                                        <p className="header">Benefit:</p>
                                        <p className="body">
                                            Spiritual<br />
                                        Energy
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_illustration five">
                                <img src="svgs/fitness.svg" alt="Illustration" />
                            </div>
                            <div className="card_text">
                                <h4 className="card_text_header header-3">Fitness</h4>
                                <div className="card_text_details d-flex">
                                    <div className="left">
                                        <p className="header">Target:</p>
                                        <p className="body">
                                            7+ hrs<br />
                                        per week
                                    </p>
                                    </div>
                                    <div className="right">
                                        <p className="header">Benefit:</p>
                                        <p className="body">
                                            Physical<br />
                                        Energy
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_illustration six">
                                <img src="svgs/relationship.svg" alt="Illustration" />
                            </div>
                            <div className="card_text">
                                <h4 className="card_text_header header-3">Relationship</h4>
                                <div className="card_text_details d-flex">
                                    <div className="left">
                                        <p className="header">Target:</p>
                                        <p className="body">
                                            20+ hrs<br />
                                        per week
                                    </p>
                                    </div>
                                    <div className="right">
                                        <p className="header">Benefit:</p>
                                        <p className="body">
                                            Companionship<br />& Intimacy
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_illustration seven">
                                <img src="svgs/selfcare.svg" alt="Illustration" />
                            </div>
                            <div className="card_text">
                                <h4 className="card_text_header header-3">Self Care</h4>
                                <div className="card_text_details d-flex">
                                    <div className="left">
                                        <p className="header">Target:</p>
                                        <p className="body">
                                            20+ hrs<br />
                                        per week
                                    </p>
                                    </div>
                                    <div className="right">
                                        <p className="header">Benefit:</p>
                                        <p className="body">
                                            Good<br />
                                        Health
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_illustration eight">
                                <img src="svgs/sleep.svg" alt="Illustration" />
                            </div>
                            <div className="card_text">
                                <h4 className="card_text_header header-3">Sleep</h4>
                                <div className="card_text_details d-flex">
                                    <div className="left">
                                        <p className="header">Target:</p>
                                        <p className="body">
                                            49+ hrs<br />
                                        per week
                                    </p>
                                    </div>
                                    <div className="right">
                                        <p className="header">Benefit:</p>
                                        <p className="body">
                                            Recovery <br/>&Recharge
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_illustration nine">
                                <img src="svgs/errand.svg" alt="Illustration" />
                            </div>
                            <div className="card_text">
                                <h4 className="card_text_header header-3">Errand</h4>
                                <div className="card_text_details d-flex">
                                    <div className="left">
                                        <p className="header">Target:</p>
                                        <p className="body">
                                            {'< 5'} hrs<br />
                                        per week
                                    </p>
                                    </div>
                                    <div className="right">
                                        <p className="header">Benefit:</p>
                                        <p className="body">
                                            Support Core<br />
                                        Activities
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card_illustration ten">
                                <img src="svgs/travel.svg" alt="Illustration" />
                            </div>
                            <div className="card_text">
                                <h4 className="card_text_header header-3">Travel</h4>
                                <div className="card_text_details d-flex">
                                    <div className="left">
                                        <p className="header">Target:</p>
                                        <p className="body">
                                            {'< 10'} hrs<br />
                                        per week
                                    </p>
                                    </div>
                                    <div className="right">
                                        <p className="header">Benefit:</p>
                                        <p className="body">
                                            Commuting <br/>& Transportation
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default EventSection;


