import { FC } from 'react'
import styles from './index.module.css';

export const StandByScreen: FC = () => {
    return (
        <div className={styles.standByScreen}>
            <svg className={styles.svg} xmlns="http://www.w3.org/2000/svg" width="194" height="194" display="block" preserveAspectRatio="xMidYMid" viewBox="0 0 100 100"><path fill="#24292e" d="M3.5 3.5h29v29h-29z"><animate attributeName="fill" begin="0s" calcMode="discrete" dur="2.941176470588235s" keyTimes="0;0.125;1" repeatCount="indefinite" values="#4776e6;#24292e;#24292e"/></path><path fill="#24292e" d="M35.5 3.5h29v29h-29z"><animate attributeName="fill" begin="0.3676470588235294s" calcMode="discrete" dur="2.941176470588235s" keyTimes="0;0.125;1" repeatCount="indefinite" values="#4776e6;#24292e;#24292e"/></path><path fill="#24292e" d="M67.5 3.5h29v29h-29z"><animate attributeName="fill" begin="0.7352941176470588s" calcMode="discrete" dur="2.941176470588235s" keyTimes="0;0.125;1" repeatCount="indefinite" values="#4776e6;#24292e;#24292e"/></path><path fill="#24292e" d="M3.5 35.5h29v29h-29z"><animate attributeName="fill" begin="2.5735294117647056s" calcMode="discrete" dur="2.941176470588235s" keyTimes="0;0.125;1" repeatCount="indefinite" values="#4776e6;#24292e;#24292e"/></path><path fill="#24292e" d="M67.5 35.5h29v29h-29z"><animate attributeName="fill" begin="1.102941176470588s" calcMode="discrete" dur="2.941176470588235s" keyTimes="0;0.125;1" repeatCount="indefinite" values="#4776e6;#24292e;#24292e"/></path><path fill="#24292e" d="M3.5 67.5h29v29h-29z"><animate attributeName="fill" begin="2.205882352941176s" calcMode="discrete" dur="2.941176470588235s" keyTimes="0;0.125;1" repeatCount="indefinite" values="#4776e6;#24292e;#24292e"/></path><path fill="#24292e" d="M35.5 67.5h29v29h-29z"><animate attributeName="fill" begin="1.838235294117647s" calcMode="discrete" dur="2.941176470588235s" keyTimes="0;0.125;1" repeatCount="indefinite" values="#4776e6;#24292e;#24292e"/></path><path fill="#24292e" d="M67.5 67.5h29v29h-29z"><animate attributeName="fill" begin="1.4705882352941175s" calcMode="discrete" dur="2.941176470588235s" keyTimes="0;0.125;1" repeatCount="indefinite" values="#4776e6;#24292e;#24292e"/></path></svg>
        </div>
    )
}