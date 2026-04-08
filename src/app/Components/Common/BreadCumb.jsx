"use client"
import { useEffect } from "react";
import loadBackgroudImages from "./loadBackgroudImages";
import Image from "next/image";
import Link from "next/link";

const BreadCumb = ({Title,}) => {
    
    useEffect(() => {
        loadBackgroudImages();
      }, []);

    return (

        <div className="breadcrumb-wrapper bg-cover" data-background="/assets/img/hero/Sample-Hero-1.png" >
        {/* <div className="left-shape">
        <Image src="/assets/img/Home/Logo Pattern 1.png" alt="img" width={250} height={448}   />
        </div>
        <div className="right-shape">
        <Image src="/assets/img/Home/Logo Pattern 2.png" alt="img" width={250} height={448}   />
        </div> */}
        <div className="container">
            <div className="page-heading">
                <div className="breadcrumb-sub-title">
                    <h1 className="wow fadeInUp" data-wow-delay=".3s">{Title}</h1>
                </div>
                <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
                    <li>
                    <Link href="/">
                        Home
                        </Link>
                    </li>
                    <li>
                    <i className="bi bi-chevron-right"></i>
                    </li>
                    <li>
                    {Title}
                    </li>
                </ul>
            </div>
        </div>
    </div>

    );
};

export default BreadCumb;