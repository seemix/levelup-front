import { GiRazor } from 'react-icons/gi';
import { ImScissors } from 'react-icons/im';
import { TfiBrushAlt } from 'react-icons/tfi';

export const servicesData = [
    {
        id: 1,
        icon: <ImScissors />,
        services: [
            {
                id: 0,
                name: 'haircutStyle',
                duration: 45,
            },
            {
                id: 1,
                name: 'beardTrim',
                duration: 30,
            },
            {
                id: 2,
                name: 'haircutBeardTrim',
                duration: 60,
            },
        ],
    },
    {
        id: 2,
        icon: <GiRazor />,
        services: [
            {
                id: 0,
                name: 'shave',
                duration: 30,
            },
            {
                id: 1,
                name: 'beardTinting',
                duration: 20,
            },
            {
                id: 2,
                name: 'royalShave',
                duration: 30,
            },
        ],
    },
    {
        id: 3,
        icon: <TfiBrushAlt />,
        services: [
            {
                id: 0,
                name: 'faceWaxing1',
                duration: 10,
            },
            {
                id: 1,
                name: 'faceWaxing3',
                duration: 25,
            },
            {
                id: 2,
                name: 'hairStyling',
                duration: 20,
            },
        ],
    },
];
