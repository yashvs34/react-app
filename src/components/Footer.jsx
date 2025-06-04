
function Footer ()
{
    return (
        <div className="footer">
            <div className="image-container">
                <a href="https://www.x.com">
                    <img src="/x.jpg" alt="X" className="img"/>
                </a>

                <a href="https://www.instagram.com">
                    <img src="/instagram.jpg" alt="instagram" className="img"/>
                </a>

                <a href="https://www.whatsapp.com">
                    <img src="/whatsapp.png" alt="whatsapp" className="img"/>
                </a>
            </div>

            <div className="footer-text">
                ©2025 All rights reserved.
            </div>
        </div>
    )
}

export default Footer