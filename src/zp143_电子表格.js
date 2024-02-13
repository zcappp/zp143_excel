let ref, exc, container, props

function init(_ref) {
    ref = _ref
    exc = ref.exc
    container = ref.container
    props = ref.props
    let data = props.data || { sheets: { "sheet-01": { name: "_", cellData: {} } } }
    if (parseInt(getComputedStyle(container).height) < 200) container.style.height = "400px"
    load(U => {
        container.workbook = U.createUniverSheet(data)
        container.getData = () => {
            return container.workbook.save()
        }

        // https://univer.work/playground/?title=React%20and%20Facade%20API
        // container.API = window.UniverFacade.FUniver.newAPI(U)
        // container.API.onCommandExecuted(cmd => {
        //     if (cmd.type !== 2 || cmd.id !== "sheet.mutation.set-range-values") return
        //     // log(cmd)
        // })
    })
}


$plugin({
    id: "zp143",
    props: [{
        prop: "data",
        type: "text",
        label: "数据集",
        ph: "($v.excel)"
    }],
    init
})

/* ----------------------------------------------------------------------------------- */

function load(cb) {
    const arr = [
        "https://unpkg.com/@univerjs/design@0.1.0-beta.4/lib/index.css",
        "https://unpkg.com/@univerjs/ui@0.1.0-beta.4/lib/index.css",
        "https://unpkg.com/@univerjs/sheets-ui@0.1.0-beta.4/lib/index.css",
        "https://unpkg.com/@univerjs/sheets-formula@0.1.0-beta.4/lib/index.css",
        "https://unpkg.com/@univerjs/sheets-numfmt@0.1.0-beta.4/lib/index.css",
        "https://unpkg.com/clsx@2.0.0/dist/clsx.min.js",
        "https://unpkg.com/react@18.2.0/umd/react.production.min.js",
        "https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js",
        "https://unpkg.com/rxjs@7.8.1/dist/bundles/rxjs.umd.min.js",
        "https://unpkg.com/@wendellhu/redi@0.12.13/dist/redi.js",
        "https://unpkg.com/@wendellhu/redi@0.12.13/dist/react-bindings.js",
        "https://unpkg.com/@univerjs/core@0.1.0-beta.4/lib/umd/index.js",
        "https://unpkg.com/@univerjs/network@0.1.0-beta.4/lib/umd/index.js",
        "https://unpkg.com/@univerjs/design@0.1.0-beta.4/lib/umd/index.js",
        "https://unpkg.com/@univerjs/engine-render@0.1.0-beta.4/lib/umd/index.js",
        "https://unpkg.com/@univerjs/engine-formula@0.1.0-beta.4/lib/umd/index.js",
        "https://unpkg.com/@univerjs/ui@0.1.0-beta.4/lib/umd/index.js",
        "https://unpkg.com/@univerjs/sheets@0.1.0-beta.4/lib/umd/index.js",
        "https://unpkg.com/@univerjs/docs@0.1.0-beta.4/lib/umd/index.js",
        "https://unpkg.com/@univerjs/sheets-ui@0.1.0-beta.4/lib/umd/index.js",
        "https://unpkg.com/@univerjs/sheets-formula@0.1.0-beta.4/lib/umd/index.js",
        "https://unpkg.com/@univerjs/sheets-numfmt@0.1.0-beta.4/lib/umd/index.js",
        "https://unpkg.com/@univerjs/facade@0.1.0-beta.4/lib/umd/index.js",
    ]
    exc('load(arr)', { arr }, () => {
        let U = new window.UniverCore.Univer({ theme: window.UniverDesign.defaultTheme })
        U.registerPlugin(window.UniverDocs.UniverDocsPlugin, { hasScroll: false })
        U.registerPlugin(window.UniverEngineRender.UniverRenderEnginePlugin)
        U.registerPlugin(window.UniverUi.UniverUIPlugin, { container: ref.id, header: false, toolbar: true, footer: true })
        U.registerPlugin(window.UniverSheets.UniverSheetsPlugin)
        U.registerPlugin(window.UniverSheetsUi.UniverSheetsUIPlugin)
        U.registerPlugin(window.UniverSheetsNumfmt.UniverSheetsNumfmtPlugin)
        U.registerPlugin(window.UniverEngineFormula.UniverFormulaEnginePlugin)
        U.registerPlugin(window.UniverSheetsFormula.UniverSheetsFormulaPlugin)
        cb(U)
    })
}