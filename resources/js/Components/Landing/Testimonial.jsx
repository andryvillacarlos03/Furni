import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import { src_config } from "@/Config/Config";

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "I recently redecorated my apartment and Furni made it so easy to find pieces that matched my style. The coffee table and accent chairs are both modern and cozy — exactly what I was looking for. Great prices too! I’ll definitely shop here again.",
      author: "Maria Luna Redoble",
      position: "Video Editor",
      image: `${src_config}/images/luna-testimonial.jpg`,
    },
    {
      quote:
        "Every piece I’ve purchased from Furni has brought an elegant touch to my home. The craftsmanship is impeccable and you can tell the furniture is made to last. It’s worth every penny for the quality and the beautiful design. Truly delighted!",
      author: "Ritz Fernandez",
      position: "CEO, BSIT BARBEQUE.",
      image: `${src_config}/images/rits-testimonial.jpg`,
    },
    {
      quote:
        "We needed durable, stylish furniture for our growing family and Furni delivered! The dining set is not only beautiful but also easy to clean — perfect for our kids. The whole buying experience was smooth and stress-free. Five stars!",
      author: "Marc Ray Genilla",
      position: "Web Developer",
      image: `${src_config}/images/marc-testimonial.jpg`,
    },
  ];

  return (
    <div className="testimonial-section py-5">
      <Container>
        <Row>
          <Col lg={7} className="mx-auto text-center mb-4">
            <h2 className="section-title">Testimonials</h2>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col lg={10}>
            <div className="testimonial-slider-wrap position-relative text-center">

              {/* Custom Nav */}
              <div id="testimonial-nav">
                <span className="prev" data-controls="prev">
                  <span className="fa fa-chevron-left"></span>
                </span>
                <span className="next" data-controls="next">
                  <span className="fa fa-chevron-right"></span>
                </span>
              </div>

              {/* Swiper Slider */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 4000 }}
                loop
                speed={1000}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                className="testimonial-slider"
              >
                {testimonials.map((item, index) => (
                  <SwiperSlide key={index}>
                    <Row className="justify-content-center">
                      <Col lg={8} className="mx-auto">
                        <div className="testimonial-block px-4 py-5">
                          <blockquote className="mb-4">
                            <p className="fs-5 fst-italic">
                              &ldquo;{item.quote}&rdquo;
                            </p>
                          </blockquote>

                          <div className="author-info d-flex flex-column align-items-center">
                            <div className="author-pic mb-3">
                              <img
                                src={item.image}
                                alt={item.author}
                                style={{
                                  width: "200px",
                                  height: "200px",
                                  borderRadius: "50%",
                                  objectFit: "cover",
                                  border: "3px solid #ddd",
                                }}
                              />
                            </div>
                            <h5 className="mb-1 fw-bold">{item.author}</h5>
                            <span className="position text-muted">{item.position}</span>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
