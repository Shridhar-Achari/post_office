import React from "react";
import { Link } from "react-router-dom";
function Footers()
{
    return(
    <div className="App">
    <div class="container-fluid1" id="footer">
      <div class="container my-5">
      <footer class="text-center text-lg-start text-white">
          <div class="container text-center text-md-start mt-5">
            <div class="row mt-3">
              <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 class="text-uppercase fw-bold mb-4">
                  <i class="fas fa-gem me-3"></i>POST OFFICE
                </h6>
                <p>
                    Maria Complex, Nh 17, Vader Hobli, Kundapura, Udupi district, Karnataka state, PIN-576201
                </p>
                <br></br>
                <div class="social">
                  <Link to="" class="me-4 text-reset">
                    <i class="fa fa-facebook" ></i>
                  </Link>
                  <Link to="" class="me-4 text-reset">
                    <i class="fa fa-twitter"></i>
                  </Link>
                  <Link to="" class="me-4 text-reset">
                    <i class="fa fa-google"></i>
                  </Link>
                  <Link to="" class="me-4 text-reset">
                    <i class="fa fa-instagram"></i>
                  </Link>
                </div>
                <br></br>
              </div>
              <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <p>
                <Link to="home" class="text-reset">Home</Link>
                </p>
                <p>
                  <Link to="about" class="text-reset">About Us</Link>
                </p>
                <p>
                <Link to="contact" class="text-reset">Contact</Link>
                </p>
                <p>
                <Link to="" class="text-reset">Forms</Link>
                </p>
                <p>
                <Link to="" class="text-reset">Recruitment</Link>
                </p>
                <p>
                  <Link to="" class="text-reset">Holidays</Link>
                </p>
              </div>
              <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <p>
                <Link to="contact" class="text-reset">Feedback</Link>
                </p>
                <p>
                <Link to="" class="text-reset">Related Sites</Link>
                </p>
                <p>
                <Link to="" class="text-reset">Website Policies</Link>
                </p>
                <p>
                <Link to="" class="text-reset">Employee Corner</Link>
                </p>
                <p>
                <Link to="contact" class="text-reset">Sitemap</Link>
                </p>
              </div>
              <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <p>
                <Link to="contact" class="text-reset">Contact Us</Link>
                </p>
                <p>
                <Link to="" class="text-reset">Help</Link>
                </p>
                <p>
                <Link to="" class="text-reset">Privacy</Link>
                </p>
                <p>
                <Link to="" class="text-reset">Terms and Condition</Link>
                </p>
              </div>
            </div>
          </div>
      </footer>
    </div>
    </div> 
    </div>
    )
}
export default Footers;