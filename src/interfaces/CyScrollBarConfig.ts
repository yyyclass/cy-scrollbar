/**
 * 滚动条方块的配置接口
 *
 * scrollbar box config interface
 */
interface CyScrollBoxConfig {
    /**
     * 滚动条方块的宽
     */
    width: number;
    /**
     * 滚动条方块的高
     */
    height: number;
    /**
     * 滚动条方块的背景颜色
     */
    backgroundColor: string;
}

/**
 * 滚动条管道的配置接口
 *
 * scroll track config interface
 */
interface CyScrollTrackConfig {
    /**
     * 滚动条管道的宽
     *
     * scrollbar track width
     */
    trackWidth: number;
    /**
     * 滚动条管道的高
     */
    trackHeight: number;
    /**
     * 滚动条管道的 transform 下的 translate3d 的 x值
     */
    trackX: number;
    /**
     * 滚动条管道的 transform 下的 translate3d 的 y值
     */
    trackY: number;
    /**
     * 滚动条管道的背景颜色
     */
    trackBackgroundColor: string;
}

/**
 * 滚动条的配置项
 *
 * scrollbar type
 */
type CyScrollBarConfig = Partial<CyScrollTrackConfig & CyScrollBoxConfig>;

export {
    CyScrollBarConfig,
    CyScrollBoxConfig,
    CyScrollTrackConfig
}

export default CyScrollBarConfig;