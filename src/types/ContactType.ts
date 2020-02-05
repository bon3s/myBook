export interface ContactType {
    id: string;
    // image: string;
    name: string;
    email: string;
    numbers: [
        {
            label: string;
            number: string;
        }
    ];
}
