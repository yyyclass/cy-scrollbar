import CyScrollBarConfig from "./interfaces/CyScrollBarConfig";


interface CyScrollBar {
    /**
     * 扩展功能
     */
    extend: () => void,
    before: () => void;
    after: () => void;
}

class CyScrollBar {

    /**
     * @param wrapperId {string} 固定的区域 id
     * @param containerId {string} 超出固定的区域 id
     */
    constructor(wrapperId: string, containerId: string)

    /**
     * @param wrapperId {string} 固定的区域 id
     * @param containerId {string} 超出固定的区域 id
     * @param config {any} 配置项
     */
    constructor(wrapperId: string, containerId: string, config: CyScrollBarConfig)
    constructor(wrapperId: string, containerId: string, config?: CyScrollBarConfig) {

    }

}


export {
    CyScrollBar
}
export default CyScrollBar;