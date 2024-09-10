import { MDBFooter, MDBContainer, MDBRow, MDBCol,MDBIcon} from 'mdb-react-ui-kit';
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { FaTwitterSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaEnvelopeOpen } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaPrint } from "react-icons/fa6";
import { FaGem } from "react-icons/fa";

const Footer=()=>{
  const mynav=useNavigate();
    return(
        <>
          <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
          <FaFacebook />
          </a>
          <a href='' className='me-4 text-reset'>
          <FaTwitterSquare />
          </a>
          <a href='' className='me-4 text-reset'>
          <FaGoogle />
          </a>
          <a href='' className='me-4 text-reset'>
          <FaInstagramSquare />
          </a>
          <a href='' className='me-4 text-reset'>
          <FaLinkedin />
          </a>
          <a href='' className='me-4 text-reset'>
          <FaGithub />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              <FaGem className='me-3' />
                Company name
              </h6>
              <p>
                HatStore Private Limited Bhopal. <br />
                An International company producing <br />
                hats since 2007 of high quality <br /> 
                and standard.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p>
                <a href='' onClick={()=>{mynav("/men")}} className='text-reset'>
                  Men
                </a>
              </p>
              <p>
                <a href='' onClick={()=>{mynav("/women")}} className='text-reset'>
                  Women
                </a>
              </p>
              <p>
                <a href='' onClick={()=>{mynav("/kids")}} className='text-reset'>
                  Kids
                </a>
              </p>
              <p>
                <a href='' onClick={()=>{mynav("/sale")}} className='text-reset'>
                  Sale
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
              <FaHome className='me-3'  />
                Bhopal MP 462022, India
              </p>
              <p>
              <FaEnvelopeOpen className='me-3'  />
                hatstorebhopal@gmail.com
              </p>
              <p>
              <FaPhone className='me-3'  /> +91 1800 567 88
              </p>
              <p>
              <FaPrint className='me-3'  /> +91 1802 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='#'>
          HatStore.com
        </a>
      </div>
    </MDBFooter>
        </>
    )
}


export default Footer;