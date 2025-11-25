import { Component, OnInit } from '@angular/core';

interface Experience {
    role: string;
    company: string;
    period: string;
    location: string;
    description: string[];
}

interface Education {
    degree: string;
    school: string;
    year: string;
}

@Component({
    selector: 'app-cv',
    templateUrl: './cv.component.html',
    styleUrls: ['./cv.component.css'],
    standalone: false
})
export class CvComponent implements OnInit {

    name = 'Venkatesh Ramakrishnaiah';
    title = 'Director at Alvarez and Marsal | Digital and Technology Services';
    email = 'venkatesh.br@gmail.com';
    linkedin = 'linkedin.com/in/venkateshbr';
    phone = '+65 96316235';
    location = 'Singapore';

    summary = `Distinguished IT and Digital transformation leader with over 22 years of experience. Rich background in IT strategy & Architecture, Due Diligence, Performance improvement, Carve-outs and Integration across Industry sectors.
    Currently serving as the Director for Digital & Technology Services at Alvarez and Marsal Southeast Asia leading IT Strategy & Roadmap, IT Due Diligence, Carveouts and Integration.
    Have held pivotal roles in the past, including Chief Technologist/CTO at DXC Asia and Director of Digital Engineering at Cognizant.
    Previously, I've established and managed Centers of Excellence concentrating on Cloud, IoT, Blockchain, and AI/ML technologies for the purpose of pioneering and prototyping advanced solutions.
    I have envisioned, designed, and directed engineering teams in creating innovative products such as a highly prosperous multi-tenant, cloud-native public procurement platform and a versatile, multi-tenant, cloud native biometric identity platform.`;

    skills: string[] = [
        'IT Transformation',
        'Enterprise Architecture',
        'Cloud Computing',
        'IT Strategy',
        'Digital Transformation',
        'Solution Architecture',
        'Agile Methodologies',
        'DevOps',
        'Microservices',
        'IoT',
        'Blockchain',
        'AI/ML'
    ];

    languages: string[] = [
        'English',
        'Kannada',
        'Hindi'
    ];

    certifications: string[] = [
        'ITILv3 Foundation',
        'COBIT',
        'Developing Applications with Google Cloud Specialization',
        'Developing APIs with Google Cloud\'s Apigee API Platform Specialization'
    ];

    experience: Experience[] = [
        {
            role: 'Director',
            company: 'Alvarez & Marsal',
            period: 'July 2022 - Present',
            location: 'Singapore',
            description: [
                'IT Strategy & Roadmap, Due Diligence, IT Carveouts and Integration.'
            ]
        },
        {
            role: 'Chief Technologist/CTO/ Head of Architecture',
            company: 'DXC Technology',
            period: 'September 2019 - July 2022',
            location: 'Singapore',
            description: [
                'CTO for Strategic Accounts across Financial Services and Travel Sector.',
                'Head of Solutions and Architecture.',
                'COE Lead for Cloud, IoT and Digital Engineering.'
            ]
        },
        {
            role: 'Director Digital Engineering',
            company: 'Cognizant',
            period: 'May 2018 - August 2019',
            location: 'Bengaluru Area, India',
            description: [
                'Digital IT strategy and Architecture/Technology Governance',
                'Agile, cloud-native, micro services architecture',
                'DevOps'
            ]
        },
        {
            role: 'Chief Technologist',
            company: 'DXC Technology',
            period: 'April 2017 - April 2018',
            location: 'Bengaluru Area, India',
            description: []
        },
        {
            role: 'Chief Technologist/CTO',
            company: 'Hewlett Packard Enterprise',
            period: 'August 2014 - April 2018',
            location: 'Bengaluru Area, India',
            description: [
                'Advisor at senior and executive levels of strategic accounts',
                'Provide Technology Strategy and direction on various transformation initiatives',
                'Promote and drive Innovation and thought leadership',
                'Conceive and create new technology programs to support business growth.',
                'Conceptualized, Architected and Led the engineering team to develop Biometric Identity as a service platform.'
            ]
        },
        {
            role: 'Enterprise Architect',
            company: 'Hewlett Packard Enterprise',
            period: 'June 2011 - August 2014',
            location: '',
            description: [
                'Solutioning for Large deals, Consulting and Architecture Delivery across Industry Verticals',
                'Applications Rationalization & Modernization',
                'IT Transformation, Applications Transformation to Cloud, SOA'
            ]
        },
        {
            role: 'Lead Solutions Architect',
            company: 'Lloyds Banking Group',
            period: 'February 2010 - May 2011',
            location: '',
            description: [
                'Enterprise Architecture & Design (through Wipro Consulting)'
            ]
        },
        {
            role: 'Sr. Manager Enterprise Architecture',
            company: 'Wipro Consulting',
            period: 'May 2009 - May 2011',
            location: '',
            description: [
                'IT Strategy, Enterprise Architecture, Application Portfolio Rationalization, Architecture Definition & Review, SOA Consulting'
            ]
        },
        {
            role: 'Enterprise Architect',
            company: 'BT Global Services',
            period: 'December 2007 - May 2009',
            location: '',
            description: [
                'Enterprise Architecture, Solution Architecture'
            ]
        },
        {
            role: 'Product Manager',
            company: 'HP',
            period: 'June 2005 - August 2007',
            location: '',
            description: [
                'Created a Multi tenant e-Procurement Product.',
                'Led a team of engineers and consultants in shaping the product vision and also as a technical development manager leading the team to develop the product.'
            ]
        },
        {
            role: 'Technical Consultant',
            company: 'HP',
            period: 'June 2000 - May 2005',
            location: '',
            description: [
                'Technical Consulting'
            ]
        },
        {
            role: 'Programmer Analyst',
            company: 'Mediateck',
            period: 'January 1999 - March 2000',
            location: '',
            description: [
                'Design and development of various e-commerce projects on J2EE platform.'
            ]
        }
    ];

    education: Education[] = [
        {
            degree: 'Bachelor of Engineering, Mechanical Engineering',
            school: 'Bangalore University',
            year: ''
        },
        {
            degree: 'School, High School/Secondary Diplomas and Certificates',
            school: 'Cordial High School',
            year: ''
        },
        {
            degree: 'Pre University, Physics, Chemistry, Maths, Biology',
            school: 'Seshadripuram Pre-University College',
            year: ''
        }
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
