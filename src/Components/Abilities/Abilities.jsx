import React from 'react'
import { useRef } from 'react'
import javascriptImg from '../../assets/652581_code_command_develop_javascript_language_icon.svg'
import htmlImg from '../../assets/294678_html5_icon.svg'
import cssImg from '../../assets/294692_css3_icon.svg'
import reactImg from '../../assets/1174949_js_react js_logo_react_react native_icon.svg'
import nodeImg from '../../assets/nodejs-2.svg'
import expressImg from '../../assets/expressjs-icon.svg'
import postgresImg from '../../assets/postgresql-vertical.svg'
import sequelImg from '../../assets/sequelizejs-icon.svg'
import phpImg from '../../assets/new-php-logo.svg'
import mysqlImg from '../../assets/logo-mysql-170x115.png'
import phytonImg from '../../assets/Python-logo-notext.svg.png'
import netBImg from '../../assets/888px-Apache_NetBeans_Logo.svg.png'
import vscodeImg from '../../assets/Visual_Studio_Code_1.35_icon.svg.png'
import './Abilities.css'

const Abilities = () => {

    const myRef = useRef(null)
 
    const executeScroll = () => myRef.current.scrollIntoView() 

  return (
    <section id="abilities" className="demo">
          <article className='about_me'>
        <h1 className='title_name'>Abilities</h1>
        </article>
        <article className='cards_container'>
        <span className="card">
        <img src={javascriptImg} alt="js" />
        <p>Javascript is a powerful language, capable of providing effective solutions in most areas of technology.</p>
        </span>
        <span className="card">
        <img src={htmlImg} alt="html" /> 
        <p>
        HTML5 is a markup language used for structuring and presenting content on websites.
        </p>
        </span>
        <span className="card" >
        <img src={cssImg} alt="css"/> 
        <p>
        CSS is a graphic design language that allows you to define and create the presentation of a structured document written in a markup language.
        </p>
        </span>
        <span className="card">
        <img src={reactImg} alt="react" />
        <p>React is a library written in JavaScript, developed at Facebook to make it easy to create reusable, interactive components for user interfaces.</p>
        </span>
        <span className="card" >
        <img src={nodeImg} alt="node"/> 
        <p>Node.js is used to create very efficient dynamic websites, written with the JavaScript programming language.
        </p>
        </span>
        <span className="card">
        <img src={expressImg} alt="express" width='200'/>
        <p>Express is a node js web application framework that provides broad features for building web and mobile applications.</p>
        </span>
        <span className="card" >
        <img src={postgresImg} alt="node" width='200'/> 
        <p>PostgreSQL is a very high level database management system, completely free software and with a BSD license, compatible with any use, be it personal or commercial.
        </p>
        </span>
        <span className="card">
        <img src={sequelImg} alt="sequelize" width='200'/>
        <p>Sequelize is a modern TypeScript and Node.js ORM for Postgres, MySQL, MariaDB, SQLite and SQL Server, and more.</p>
        </span>
        <span className="card">
        <img src={phpImg} alt="php" width='200'/>
        <p>PHP (recursive acronym for PHP: Hypertext Preprocessor ) is a widely-used open source general-purpose scripting language that is especially suited for web development and can be embedded into HTML.</p>
        </span>
        <span className="card">
        <img src={mysqlImg} alt="mysql" width='200'/>
        <p>Relational database management system (RDBMS) developed by Oracle that is based on structured query language (SQL).</p>
        </span>
        <span className="card">
        <img src={phytonImg} alt="phyton" width='200'/>
        <p>Python is a computer programming language often used to build websites and software, automate tasks, and conduct data analysis.</p>
        </span>
        <span className="card">
        <img src={netBImg} alt="net_b" width='200'/>
        <p>NetBeans is an integrated development environment (IDE) for Java.</p>
        </span>
        <span className="card">
        <img src={vscodeImg} alt="vscode" width='200'/>
        <p>Visual Studio Code is a code editor redefined and optimized for building and debugging modern web and cloud applications.</p>
        </span>
        <> 
         <div ref={myRef}></div> 
         <a onClick={executeScroll}><span></span></a> 
        </>
       </article>
        </section>
  )
}

export default Abilities