import { Mermaid } from '.';
import { Default as Toggle } from '../Toggle/Toggle.stories';

export default {
  title: 'Components/Mermaid',
  component: Mermaid,
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
};

export const Default = () => (
  <>
    <Toggle />
    <Mermaid>
      <div className="mermaid" data-processed="true">
        <svg
          id="mermaid-1649100817667"
          width="100%"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          height="409.75"
          style={{ maxWidth: '834.5888671875px' }}
          viewBox="0 0 834.5888671875 409.75"
        >
          <style
            dangerouslySetInnerHTML={{
              __html:
                '#mermaid-1649100817667 {font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;fill:#333;}#mermaid-1649100817667 .error-icon{fill:#552222;}#mermaid-1649100817667 .error-text{fill:#552222;stroke:#552222;}#mermaid-1649100817667 .edge-thickness-normal{stroke-width:2px;}#mermaid-1649100817667 .edge-thickness-thick{stroke-width:3.5px;}#mermaid-1649100817667 .edge-pattern-solid{stroke-dasharray:0;}#mermaid-1649100817667 .edge-pattern-dashed{stroke-dasharray:3;}#mermaid-1649100817667 .edge-pattern-dotted{stroke-dasharray:2;}#mermaid-1649100817667 .marker{fill:#333333;stroke:#333333;}#mermaid-1649100817667 .marker.cross{stroke:#333333;}#mermaid-1649100817667 svg{font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:16px;}#mermaid-1649100817667 .label{font-family:"trebuchet ms",verdana,arial,sans-serif;color:#333;}#mermaid-1649100817667 .cluster-label text{fill:#333;}#mermaid-1649100817667 .cluster-label span{color:#333;}#mermaid-1649100817667 .label text,#mermaid-1649100817667 span{fill:#333;color:#333;}#mermaid-1649100817667 .node rect,#mermaid-1649100817667 .node circle,#mermaid-1649100817667 .node ellipse,#mermaid-1649100817667 .node polygon,#mermaid-1649100817667 .node path{fill:#ECECFF;stroke:#9370DB;stroke-width:1px;}#mermaid-1649100817667 .node .label{text-align:center;}#mermaid-1649100817667 .node.clickable{cursor:pointer;}#mermaid-1649100817667 .arrowheadPath{fill:#333333;}#mermaid-1649100817667 .edgePath .path{stroke:#333333;stroke-width:2.0px;}#mermaid-1649100817667 .flowchart-link{stroke:#333333;fill:none;}#mermaid-1649100817667 .edgeLabel{background-color:#e8e8e8;text-align:center;}#mermaid-1649100817667 .edgeLabel rect{opacity:0.5;background-color:#e8e8e8;fill:#e8e8e8;}#mermaid-1649100817667 .cluster rect{fill:#ffffde;stroke:#aaaa33;stroke-width:1px;}#mermaid-1649100817667 .cluster text{fill:#333;}#mermaid-1649100817667 .cluster span{color:#333;}#mermaid-1649100817667 div.mermaidTooltip{position:absolute;text-align:center;max-width:200px;padding:2px;font-family:"trebuchet ms",verdana,arial,sans-serif;font-size:12px;background:hsl(80, 100%, 96.2745098039%);border:1px solid #aaaa33;border-radius:2px;pointer-events:none;z-index:100;}#mermaid-1649100817667 :root{--mermaid-font-family:"trebuchet ms",verdana,arial,sans-serif;}',
            }}
          />
          <g>
            <g className="output">
              <g className="clusters" />
              <g className="edgePaths">
                <g
                  className="edgePath LS-booleon LE-hocBooleon"
                  id="L-booleon-hocBooleon"
                  style={{ opacity: 1 }}
                >
                  <path
                    className="path"
                    d="M432.9755859375,46.75L432.9755859375,50.916666666666664C432.9755859375,55.083333333333336,432.9755859375,63.416666666666664,432.9755859375,71.75C432.9755859375,80.08333333333333,432.9755859375,88.41666666666667,432.9755859375,92.58333333333333L432.9755859375,96.75"
                    markerEnd="url(#arrowhead28)"
                    style={{ fill: 'none' }}
                  />
                  <defs>
                    <marker
                      id="arrowhead28"
                      viewBox="0 0 10 10"
                      refX={9}
                      refY={5}
                      markerUnits="strokeWidth"
                      markerWidth={8}
                      markerHeight={6}
                      orient="auto"
                    >
                      <path
                        d="M 0 0 L 10 5 L 0 10 z"
                        className="arrowheadPath"
                        style={{ strokeWidth: 1, strokeDasharray: '1, 0' }}
                      />
                    </marker>
                  </defs>
                </g>
                <g
                  className="edgePath LS-hocBooleon LE-useBooleon"
                  id="L-hocBooleon-useBooleon"
                  style={{ opacity: 1 }}
                >
                  <path
                    className="path"
                    d="M432.9755859375,135.5L432.9755859375,139.66666666666666C432.9755859375,143.83333333333334,432.9755859375,152.16666666666666,432.9755859375,160.5C432.9755859375,168.83333333333334,432.9755859375,177.16666666666666,432.9755859375,181.33333333333334L432.9755859375,185.5"
                    markerEnd="url(#arrowhead29)"
                    style={{ fill: 'none' }}
                  />
                  <defs>
                    <marker
                      id="arrowhead29"
                      viewBox="0 0 10 10"
                      refX={9}
                      refY={5}
                      markerUnits="strokeWidth"
                      markerWidth={8}
                      markerHeight={6}
                      orient="auto"
                    >
                      <path
                        d="M 0 0 L 10 5 L 0 10 z"
                        className="arrowheadPath"
                        style={{ strokeWidth: 1, strokeDasharray: '1, 0' }}
                      />
                    </marker>
                  </defs>
                </g>
                <g
                  className="edgePath LS-useBooleon LE-useServerSide"
                  id="L-useBooleon-useServerSide"
                  style={{ opacity: 1 }}
                >
                  <path
                    className="path"
                    d="M380.7197265625,211.5413098864386L331.45458984375,217.82609157203217C282.189453125,224.11087325762574,183.6591796875,236.68043662881288,134.39404296875,247.13188498107309C85.12890625,257.5833333333333,85.12890625,265.9166666666667,85.12890625,270.0833333333333L85.12890625,274.25"
                    markerEnd="url(#arrowhead30)"
                    style={{ fill: 'none' }}
                  />
                  <defs>
                    <marker
                      id="arrowhead30"
                      viewBox="0 0 10 10"
                      refX={9}
                      refY={5}
                      markerUnits="strokeWidth"
                      markerWidth={8}
                      markerHeight={6}
                      orient="auto"
                    >
                      <path
                        d="M 0 0 L 10 5 L 0 10 z"
                        className="arrowheadPath"
                        style={{ strokeWidth: 1, strokeDasharray: '1, 0' }}
                      />
                    </marker>
                  </defs>
                </g>
                <g
                  className="edgePath LS-useServerSide LE-ServerSideContext"
                  id="L-useServerSide-ServerSideContext"
                  style={{ opacity: 1 }}
                >
                  <path
                    className="path"
                    d="M85.12890625,313L85.12890625,317.1666666666667C85.12890625,321.3333333333333,85.12890625,329.6666666666667,85.12890625,338C85.12890625,346.3333333333333,85.12890625,354.6666666666667,85.12890625,358.8333333333333L85.12890625,363"
                    markerEnd="url(#arrowhead31)"
                    style={{ fill: 'none' }}
                  />
                  <defs>
                    <marker
                      id="arrowhead31"
                      viewBox="0 0 10 10"
                      refX={9}
                      refY={5}
                      markerUnits="strokeWidth"
                      markerWidth={8}
                      markerHeight={6}
                      orient="auto"
                    >
                      <path
                        d="M 0 0 L 10 5 L 0 10 z"
                        className="arrowheadPath"
                        style={{ strokeWidth: 1, strokeDasharray: '1, 0' }}
                      />
                    </marker>
                  </defs>
                </g>
                <g
                  className="edgePath LS-useBooleon LE-filterProps"
                  id="L-useBooleon-filterProps"
                  style={{ opacity: 1 }}
                >
                  <path
                    className="path"
                    d="M380.7197265625,217.11945661982725L357.86572265625,222.4745471831894C335.01171875,227.8296377465515,289.3037109375,238.53981887327575,266.44970703125,248.06157610330456C243.595703125,257.5833333333333,243.595703125,265.9166666666667,243.595703125,270.0833333333333L243.595703125,274.25"
                    markerEnd="url(#arrowhead32)"
                    style={{ fill: 'none' }}
                  />
                  <defs>
                    <marker
                      id="arrowhead32"
                      viewBox="0 0 10 10"
                      refX={9}
                      refY={5}
                      markerUnits="strokeWidth"
                      markerWidth={8}
                      markerHeight={6}
                      orient="auto"
                    >
                      <path
                        d="M 0 0 L 10 5 L 0 10 z"
                        className="arrowheadPath"
                        style={{ strokeWidth: 1, strokeDasharray: '1, 0' }}
                      />
                    </marker>
                  </defs>
                </g>
                <g
                  className="edgePath LS-useBooleon LE-reactStyleAppender"
                  id="L-useBooleon-reactStyleAppender"
                  style={{ opacity: 1 }}
                >
                  <path
                    className="path"
                    d="M432.9755859375,224.25L432.9755859375,228.41666666666666C432.9755859375,232.58333333333334,432.9755859375,240.91666666666666,432.9755859375,249.25C432.9755859375,257.5833333333333,432.9755859375,265.9166666666667,432.9755859375,270.0833333333333L432.9755859375,274.25"
                    markerEnd="url(#arrowhead33)"
                    style={{ fill: 'none' }}
                  />
                  <defs>
                    <marker
                      id="arrowhead33"
                      viewBox="0 0 10 10"
                      refX={9}
                      refY={5}
                      markerUnits="strokeWidth"
                      markerWidth={8}
                      markerHeight={6}
                      orient="auto"
                    >
                      <path
                        d="M 0 0 L 10 5 L 0 10 z"
                        className="arrowheadPath"
                        style={{ strokeWidth: 1, strokeDasharray: '1, 0' }}
                      />
                    </marker>
                  </defs>
                </g>
                <g
                  className="edgePath LS-reactStyleAppender LE-styleAppender"
                  id="L-reactStyleAppender-styleAppender"
                  style={{ opacity: 1 }}
                >
                  <path
                    className="path"
                    d="M395.2723646566901,313L387.16414502640845,317.1666666666667C379.0559253961267,321.3333333333333,362.8394861355634,329.6666666666667,354.73126650528167,338C346.623046875,346.3333333333333,346.623046875,354.6666666666667,346.623046875,358.8333333333333L346.623046875,363"
                    markerEnd="url(#arrowhead34)"
                    style={{ fill: 'none' }}
                  />
                  <defs>
                    <marker
                      id="arrowhead34"
                      viewBox="0 0 10 10"
                      refX={9}
                      refY={5}
                      markerUnits="strokeWidth"
                      markerWidth={8}
                      markerHeight={6}
                      orient="auto"
                    >
                      <path
                        d="M 0 0 L 10 5 L 0 10 z"
                        className="arrowheadPath"
                        style={{ strokeWidth: 1, strokeDasharray: '1, 0' }}
                      />
                    </marker>
                  </defs>
                </g>
                <g
                  className="edgePath LS-reactStyleAppender LE-createElement"
                  id="L-reactStyleAppender-createElement"
                  style={{ opacity: 1 }}
                >
                  <path
                    className="path"
                    d="M470.6788072183099,313L478.78702684859155,317.1666666666667C486.8952464788733,321.3333333333333,503.1116857394366,329.6666666666667,511.21990536971833,338C519.328125,346.3333333333333,519.328125,354.6666666666667,519.328125,358.8333333333333L519.328125,363"
                    markerEnd="url(#arrowhead35)"
                    style={{ fill: 'none' }}
                  />
                  <defs>
                    <marker
                      id="arrowhead35"
                      viewBox="0 0 10 10"
                      refX={9}
                      refY={5}
                      markerUnits="strokeWidth"
                      markerWidth={8}
                      markerHeight={6}
                      orient="auto"
                    >
                      <path
                        d="M 0 0 L 10 5 L 0 10 z"
                        className="arrowheadPath"
                        style={{ strokeWidth: 1, strokeDasharray: '1, 0' }}
                      />
                    </marker>
                  </defs>
                </g>
                <g
                  className="edgePath LS-useBooleon LE-stringHash"
                  id="L-useBooleon-stringHash"
                  style={{ opacity: 1 }}
                >
                  <path
                    className="path"
                    d="M485.2314453125,217.8667724462439L506.2698567708333,223.09731037186995C527.3082682291666,228.32784829749593,569.3850911458334,238.78892414874795,590.4235026041666,248.18612874104065C611.4619140625,257.5833333333333,611.4619140625,265.9166666666667,611.4619140625,270.0833333333333L611.4619140625,274.25"
                    markerEnd="url(#arrowhead36)"
                    style={{ fill: 'none' }}
                  />
                  <defs>
                    <marker
                      id="arrowhead36"
                      viewBox="0 0 10 10"
                      refX={9}
                      refY={5}
                      markerUnits="strokeWidth"
                      markerWidth={8}
                      markerHeight={6}
                      orient="auto"
                    >
                      <path
                        d="M 0 0 L 10 5 L 0 10 z"
                        className="arrowheadPath"
                        style={{ strokeWidth: 1, strokeDasharray: '1, 0' }}
                      />
                    </marker>
                  </defs>
                </g>
                <g
                  className="edgePath LS-useBooleon LE-styleCompiler"
                  id="L-useBooleon-styleCompiler"
                  style={{ opacity: 1 }}
                >
                  <path
                    className="path"
                    d="M485.2314453125,211.79352291599895L532.3831380208334,218.0362690966658C579.5348307291666,224.27901527733263,673.8382161458334,236.7645076386663,720.9899088541666,247.17392048599982C768.1416015625,257.5833333333333,768.1416015625,265.9166666666667,768.1416015625,270.0833333333333L768.1416015625,274.25"
                    markerEnd="url(#arrowhead37)"
                    style={{ fill: 'none' }}
                  />
                  <defs>
                    <marker
                      id="arrowhead37"
                      viewBox="0 0 10 10"
                      refX={9}
                      refY={5}
                      markerUnits="strokeWidth"
                      markerWidth={8}
                      markerHeight={6}
                      orient="auto"
                    >
                      <path
                        d="M 0 0 L 10 5 L 0 10 z"
                        className="arrowheadPath"
                        style={{ strokeWidth: 1, strokeDasharray: '1, 0' }}
                      />
                    </marker>
                  </defs>
                </g>
              </g>
              <g className="edgeLabels">
                <g className="edgeLabel" transform style={{ opacity: 1 }}>
                  <g transform="translate(0,0)" className="label">
                    <rect rx={0} ry={0} width={0} height={0} />
                    <foreignObject width={0} height={0}>
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          display: 'inline-block',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span
                          id="L-L-booleon-hocBooleon"
                          className="edgeLabel L-LS-booleon' L-LE-hocBooleon"
                        />
                      </div>
                    </foreignObject>
                  </g>
                </g>
                <g className="edgeLabel" transform style={{ opacity: 1 }}>
                  <g transform="translate(0,0)" className="label">
                    <rect rx={0} ry={0} width={0} height={0} />
                    <foreignObject width={0} height={0}>
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          display: 'inline-block',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span
                          id="L-L-hocBooleon-useBooleon"
                          className="edgeLabel L-LS-hocBooleon' L-LE-useBooleon"
                        />
                      </div>
                    </foreignObject>
                  </g>
                </g>
                <g className="edgeLabel" transform style={{ opacity: 1 }}>
                  <g transform="translate(0,0)" className="label">
                    <rect rx={0} ry={0} width={0} height={0} />
                    <foreignObject width={0} height={0}>
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          display: 'inline-block',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span
                          id="L-L-useBooleon-useServerSide"
                          className="edgeLabel L-LS-useBooleon' L-LE-useServerSide"
                        />
                      </div>
                    </foreignObject>
                  </g>
                </g>
                <g className="edgeLabel" transform style={{ opacity: 1 }}>
                  <g transform="translate(0,0)" className="label">
                    <rect rx={0} ry={0} width={0} height={0} />
                    <foreignObject width={0} height={0}>
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          display: 'inline-block',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span
                          id="L-L-useServerSide-ServerSideContext"
                          className="edgeLabel L-LS-useServerSide' L-LE-ServerSideContext"
                        />
                      </div>
                    </foreignObject>
                  </g>
                </g>
                <g className="edgeLabel" transform style={{ opacity: 1 }}>
                  <g transform="translate(0,0)" className="label">
                    <rect rx={0} ry={0} width={0} height={0} />
                    <foreignObject width={0} height={0}>
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          display: 'inline-block',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span
                          id="L-L-useBooleon-filterProps"
                          className="edgeLabel L-LS-useBooleon' L-LE-filterProps"
                        />
                      </div>
                    </foreignObject>
                  </g>
                </g>
                <g className="edgeLabel" transform style={{ opacity: 1 }}>
                  <g transform="translate(0,0)" className="label">
                    <rect rx={0} ry={0} width={0} height={0} />
                    <foreignObject width={0} height={0}>
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          display: 'inline-block',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span
                          id="L-L-useBooleon-reactStyleAppender"
                          className="edgeLabel L-LS-useBooleon' L-LE-reactStyleAppender"
                        />
                      </div>
                    </foreignObject>
                  </g>
                </g>
                <g className="edgeLabel" transform style={{ opacity: 1 }}>
                  <g transform="translate(0,0)" className="label">
                    <rect rx={0} ry={0} width={0} height={0} />
                    <foreignObject width={0} height={0}>
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          display: 'inline-block',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span
                          id="L-L-reactStyleAppender-styleAppender"
                          className="edgeLabel L-LS-reactStyleAppender' L-LE-styleAppender"
                        />
                      </div>
                    </foreignObject>
                  </g>
                </g>
                <g className="edgeLabel" transform style={{ opacity: 1 }}>
                  <g transform="translate(0,0)" className="label">
                    <rect rx={0} ry={0} width={0} height={0} />
                    <foreignObject width={0} height={0}>
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          display: 'inline-block',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span
                          id="L-L-reactStyleAppender-createElement"
                          className="edgeLabel L-LS-reactStyleAppender' L-LE-createElement"
                        />
                      </div>
                    </foreignObject>
                  </g>
                </g>
                <g className="edgeLabel" transform style={{ opacity: 1 }}>
                  <g transform="translate(0,0)" className="label">
                    <rect rx={0} ry={0} width={0} height={0} />
                    <foreignObject width={0} height={0}>
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          display: 'inline-block',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span
                          id="L-L-useBooleon-stringHash"
                          className="edgeLabel L-LS-useBooleon' L-LE-stringHash"
                        />
                      </div>
                    </foreignObject>
                  </g>
                </g>
                <g className="edgeLabel" transform style={{ opacity: 1 }}>
                  <g transform="translate(0,0)" className="label">
                    <rect rx={0} ry={0} width={0} height={0} />
                    <foreignObject width={0} height={0}>
                      <div
                        xmlns="http://www.w3.org/1999/xhtml"
                        style={{
                          display: 'inline-block',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span
                          id="L-L-useBooleon-styleCompiler"
                          className="edgeLabel L-LS-useBooleon' L-LE-styleCompiler"
                        />
                      </div>
                    </foreignObject>
                  </g>
                </g>
              </g>
              <g className="nodes">
                <g
                  className="node default"
                  id="flowchart-booleon-18"
                  transform="translate(432.9755859375,27.375)"
                  style={{ opacity: 1 }}
                >
                  <rect
                    rx={0}
                    ry={0}
                    x="-38.466796875"
                    y="-19.375"
                    width="76.93359375"
                    height="38.75"
                    className="label-container"
                  />
                  <g className="label" transform="translate(0,0)">
                    <g transform="translate(-28.466796875,-9.375)">
                      <foreignObject width="56.93359375" height="18.75">
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            display: 'inline-block',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          booleon
                        </div>
                      </foreignObject>
                    </g>
                  </g>
                </g>
                <g
                  className="node default"
                  id="flowchart-hocBooleon-19"
                  transform="translate(432.9755859375,116.125)"
                  style={{ opacity: 1 }}
                >
                  <rect
                    rx={0}
                    ry={0}
                    x="-52.255859375"
                    y="-19.375"
                    width="104.51171875"
                    height="38.75"
                    className="label-container"
                  />
                  <g className="label" transform="translate(0,0)">
                    <g transform="translate(-42.255859375,-9.375)">
                      <foreignObject width="84.51171875" height="18.75">
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            display: 'inline-block',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          hocBooleon
                        </div>
                      </foreignObject>
                    </g>
                  </g>
                </g>
                <g
                  className="node default"
                  id="flowchart-useBooleon-20"
                  transform="translate(432.9755859375,204.875)"
                  style={{ opacity: 1 }}
                >
                  <rect
                    rx={0}
                    ry={0}
                    x="-52.255859375"
                    y="-19.375"
                    width="104.51171875"
                    height="38.75"
                    className="label-container"
                  />
                  <g className="label" transform="translate(0,0)">
                    <g transform="translate(-42.255859375,-9.375)">
                      <foreignObject width="84.51171875" height="18.75">
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            display: 'inline-block',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          useBooleon
                        </div>
                      </foreignObject>
                    </g>
                  </g>
                </g>
                <g
                  className="node default"
                  id="flowchart-useServerSide-22"
                  transform="translate(85.12890625,293.625)"
                  style={{ opacity: 1 }}
                >
                  <rect
                    rx={0}
                    ry={0}
                    x="-62.4609375"
                    y="-19.375"
                    width="124.921875"
                    height="38.75"
                    className="label-container"
                  />
                  <g className="label" transform="translate(0,0)">
                    <g transform="translate(-52.4609375,-9.375)">
                      <foreignObject width="104.921875" height="18.75">
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            display: 'inline-block',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          useServerSide
                        </div>
                      </foreignObject>
                    </g>
                  </g>
                </g>
                <g
                  className="node default"
                  id="flowchart-ServerSideContext-23"
                  transform="translate(85.12890625,382.375)"
                  style={{ opacity: 1 }}
                >
                  <rect
                    rx={0}
                    ry={0}
                    x="-77.12890625"
                    y="-19.375"
                    width="154.2578125"
                    height="38.75"
                    className="label-container"
                  />
                  <g className="label" transform="translate(0,0)">
                    <g transform="translate(-67.12890625,-9.375)">
                      <foreignObject width="134.2578125" height="18.75">
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            display: 'inline-block',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          ServerSideContext
                        </div>
                      </foreignObject>
                    </g>
                  </g>
                </g>
                <g
                  className="node default"
                  id="flowchart-filterProps-25"
                  transform="translate(243.595703125,293.625)"
                  style={{ opacity: 1 }}
                >
                  <rect
                    rx={0}
                    ry={0}
                    x="-46.005859375"
                    y="-19.375"
                    width="92.01171875"
                    height="38.75"
                    className="label-container"
                  />
                  <g className="label" transform="translate(0,0)">
                    <g transform="translate(-36.005859375,-9.375)">
                      <foreignObject width="72.01171875" height="18.75">
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            display: 'inline-block',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          filterProps
                        </div>
                      </foreignObject>
                    </g>
                  </g>
                </g>
                <g
                  className="node default"
                  id="flowchart-reactStyleAppender-27"
                  transform="translate(432.9755859375,293.625)"
                  style={{ opacity: 1 }}
                >
                  <rect
                    rx={0}
                    ry={0}
                    x="-80.25390625"
                    y="-19.375"
                    width="160.5078125"
                    height="38.75"
                    className="label-container"
                  />
                  <g className="label" transform="translate(0,0)">
                    <g transform="translate(-70.25390625,-9.375)">
                      <foreignObject width="140.5078125" height="18.75">
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            display: 'inline-block',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          reactStyleAppender
                        </div>
                      </foreignObject>
                    </g>
                  </g>
                </g>
                <g
                  className="node default"
                  id="flowchart-styleAppender-29"
                  transform="translate(346.623046875,382.375)"
                  style={{ opacity: 1 }}
                >
                  <rect
                    rx={0}
                    ry={0}
                    x="-61.1328125"
                    y="-19.375"
                    width="122.265625"
                    height="38.75"
                    className="label-container"
                  />
                  <g className="label" transform="translate(0,0)">
                    <g transform="translate(-51.1328125,-9.375)">
                      <foreignObject width="102.265625" height="18.75">
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            display: 'inline-block',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          styleAppender
                        </div>
                      </foreignObject>
                    </g>
                  </g>
                </g>
                <g
                  className="node default"
                  id="flowchart-createElement-31"
                  transform="translate(519.328125,382.375)"
                  style={{ opacity: 1 }}
                >
                  <rect
                    rx={0}
                    ry={0}
                    x="-61.572265625"
                    y="-19.375"
                    width="123.14453125"
                    height="38.75"
                    className="label-container"
                  />
                  <g className="label" transform="translate(0,0)">
                    <g transform="translate(-51.572265625,-9.375)">
                      <foreignObject width="103.14453125" height="18.75">
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            display: 'inline-block',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          createElement
                        </div>
                      </foreignObject>
                    </g>
                  </g>
                </g>
                <g
                  className="node default"
                  id="flowchart-stringHash-33"
                  transform="translate(611.4619140625,293.625)"
                  style={{ opacity: 1 }}
                >
                  <rect
                    rx={0}
                    ry={0}
                    x="-48.232421875"
                    y="-19.375"
                    width="96.46484375"
                    height="38.75"
                    className="label-container"
                  />
                  <g className="label" transform="translate(0,0)">
                    <g transform="translate(-38.232421875,-9.375)">
                      <foreignObject width="76.46484375" height="18.75">
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            display: 'inline-block',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          stringHash
                        </div>
                      </foreignObject>
                    </g>
                  </g>
                </g>
                <g
                  className="node default"
                  id="flowchart-styleCompiler-35"
                  transform="translate(768.1416015625,293.625)"
                  style={{ opacity: 1 }}
                >
                  <rect
                    rx={0}
                    ry={0}
                    x="-58.447265625"
                    y="-19.375"
                    width="116.89453125"
                    height="38.75"
                    className="label-container"
                  />
                  <g className="label" transform="translate(0,0)">
                    <g transform="translate(-48.447265625,-9.375)">
                      <foreignObject width="96.89453125" height="18.75">
                        <div
                          xmlns="http://www.w3.org/1999/xhtml"
                          style={{
                            display: 'inline-block',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          styleCompiler
                        </div>
                      </foreignObject>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </Mermaid>
  </>
);
