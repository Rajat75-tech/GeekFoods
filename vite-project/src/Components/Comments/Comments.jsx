import React from 'react';
import './Comments.css';
import girl from "../../assets/photo2.avif"


function Comments() {
    return (
    <div className='comment'>
        <div className='comm'>
            <div className='comm1'>
                <p id='lo1'>
                    Lorem ipsum dolor sit amet consectetur<br /> adipisicing elit. Maxime minima dicta amet,<br /> molestiae aliquam incidunt suscipit recusandae<br /> labore ratione doloremque, architecto et illo<br /> minus quo tenetur ducimus, voluptatibus<br />repellendus fuga aperiam vel ab! Ipsam <br /> corrupti blanditiis dolorum! Officia assumenda <br /> rem nam, eveniet enim ad inventore <br /> laudantium est illum voluptatem quis.
                </p>
                <div id='lol1'>
                    <img className='girl' src={girl} alt="girl" />
                    <div id='li1'>
                        <p>Gladis Lennon</p>
                        <p>Head of SEO</p>
                    </div>
                </div>
            </div>
            <div className='comm2'>
                <p className='lo2'>
                    Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Optio beatae incidunt <br /> perferendis soluta facilis voluptas dicta <br /> repudiandae quasi asperiores libero, <br /> exercitationem molestiae autem sapiente <br /> dolore nulla non consequatur. Eaque, dolores.
                </p>
                <div id='lol2'>
                    <img className='girl1' src={girl} alt="girl" />
                    <div id='li2'>
                        <p>Gladis Lennon</p>
                        <p>Head of SEO</p>
                    </div>
                </div>
            </div>
            <div className='comm3'>
                <p className='lo2'>
                    Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Optio beatae incidunt <br /> perferendis soluta facilis voluptas dicta <br /> repudiandae quasi asperiores libero, <br /> exercitationem molestiae autem sapiente <br /> dolore nulla non consequatur. Eaque, dolores.
                </p>
                <div id='lol3'>
                    <img className='girl2' src={girl} alt="girl" />
                    <div id='li3'>
                        <p>Gladis Lennon</p>
                        <p>Head of SEO</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='comm'>
            <div className='comm4'>
                <p id='lo1'>
                Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Dolore vel quo deserunt quos <br /> expedita minima incidunt sed tempora, a <br /> architecto consectetur reprehenderit, in repellat <br /> voluptatum.
                </p>
                <div id='lol1'>
                    <img className='girl' src={girl} alt="girl" />
                    <div id='li1'>
                        <p>Gladis Lennon</p>
                        <p>Head of SEO</p>
                    </div>
                </div>
            </div>
            <div className='comm5'>
                <p className='lo2'>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Minus doloribus eius aut unde, <br /> dolores accusantium!
                </p>
                <div id='lol2'>
                    <img className='girl1' src={girl} alt="girl" />
                    <div id='li2'>
                        <p>Gladis Lennon</p>
                        <p>Head of SEO</p>
                    </div>
                </div>
            </div>
            <div className='comm6'>
                <p className='lo2'>
                Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Eius ut necessitatibus, <br /> repudiandae qui dolor minima.
                </p>
                <div id='lol3'>
                    <img className='girl2' src={girl} alt="girl" />
                    <div id='li3'>
                        <p>Gladis Lennon</p>
                        <p>Head of SEO</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    // <div>

    // </div>
  );
}

export default Comments;