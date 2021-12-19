import dynamic from 'next/dynamic'
import { GetStaticProps, NextPage } from 'next';

const PortFoliov1 = dynamic(() => import("components/PortFoliov1"), {loading: () => <div>LOADING...</div>})

const PortFolio: NextPage = () => {
    return (
        <PortFoliov1 />
    )
}

export const getStaticProps: GetStaticProps = async () => {

    return {
        props: {
            title: 'Portfolio'
        }
    }

} 

export default PortFolio;
