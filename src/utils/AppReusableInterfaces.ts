export interface jobInterface {
    jobType: string;
    companyLogo: string;
    jobLocation: string;
    salary: string;
    postTime: string;
    jobTitle: string;
    id: string;
}
export interface companyDetailInterface {
    companyLogo: string;
    location: string;
    totalEmploye: string;
    companyQuates: string;
    id: string;
    companyName: string;
}

export interface reviewInterface {
    profilePic: string;
    id: string;
    name: string;
    position: string;
    reviewText: string;
}

export interface candidateDetailInterface {
    profilePic: string;
    id: string;
    name: string;
    location: string;
    skills: string[];
}

export interface catergoryInterface {
    icon: string;
    jobTitle: string;
    id: string;
    jobFound: string;
}

export interface blogInterface {
    imageUrl: string;
    postedDate: string;
    title: string;
    postDetailsText: string;
    id: string;
}
