export interface JobApplication {
    personalInfo: {
      firstName: string;
      lastName: string;
      email: string;
      mobile: string;
      alternatePhone?: string;
      linkedin?: string;
      githubProfile?: string;
      address: {
        street: string;
        street2?: string;
        city: string;
        state: string;
        zipCode: string;
      };
    };
    education: {
      level: string;
      degreeName: string;
      instituteName: string;
      graduationYear: number;
      grade: number;
      honors?: string;
    }[];
    skills: {
      name: string;
      category: string;
      proficiency: string;
      yearsOfExperience?: number;
      certification?: string;
    }[];
  }