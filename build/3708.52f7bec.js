"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[3708,7174],{17174:(e,n,t)=>{t.r(n),t.d(n,{default:()=>u});var o,s=t(12867),c=t(47343),r=t(12527),i=t(14209),d=t(75150),a=t(58099),l=t(61345),p=t(99729);!function(e){e.open="inspector:open"}(o||(o={}));const u=[{id:"@jupyterlab/inspector-extension:inspector",requires:[l.ITranslator],optional:[c.ICommandPalette,d.ILauncher,s.ILayoutRestorer],provides:i.IInspector,autoStart:!0,activate:(e,n,t,s,r)=>{const d=n.load("jupyterlab"),{commands:a,shell:l}=e,u=o.open,m=d.__("Show Contextual Help"),C=new c.WidgetTracker({namespace:"inspector"});function h(){return I&&!I.isDisposed}let I,v=null;return a.addCommand(u,{caption:d.__("Live updating code documentation from the active kernel"),isEnabled:()=>!I||I.isDisposed||!I.isAttached||!I.isVisible,label:m,icon:e=>e.isLauncher?p.inspectorIcon:void 0,execute:e=>{var t;const o=e&&e.text,s=e&&e.refresh;h()&&s?null===(t=I.content.source)||void 0===t||t.onEditorChange(o):function(e){var t;h()||(I=new c.MainAreaWidget({content:new i.InspectorPanel({translator:n})}),I.id="jp-inspector",I.title.label=m,I.title.icon=p.inspectorIcon,C.add(I),v=v&&!v.isDisposed?v:null,I.content.source=v,null===(t=I.content.source)||void 0===t||t.onEditorChange(e)),I.isAttached||l.add(I,"main",{activate:!1,mode:"split-right"}),l.activateById(I.id)}(o)}}),t&&t.addItem({command:u,category:m}),s&&s.add({command:u,args:{isLauncher:!0}}),r&&r.restore(C,{command:u,name:()=>"inspector"}),Object.defineProperty({},"source",{get:()=>!I||I.isDisposed?null:I.content.source,set:e=>{v=e&&!e.isDisposed?e:null,I&&!I.isDisposed&&(I.content.source=v)}})}},{id:"@jupyterlab/inspector-extension:consoles",requires:[i.IInspector,r.IConsoleTracker,s.ILabShell],autoStart:!0,activate:(e,n,t,o,s)=>{const c={};t.widgetAdded.connect(((e,n)=>{const t=n.console.sessionContext,o=n.console.rendermime,s=new i.KernelConnector({sessionContext:t}),r=new i.InspectionHandler({connector:s,rendermime:o});c[n.id]=r;const d=n.console.promptCell;r.editor=d&&d.editor,n.console.promptCellCreated.connect(((e,n)=>{r.editor=n&&n.editor})),n.disposed.connect((()=>{delete c[n.id],r.dispose()}))})),o.currentChanged.connect(((e,o)=>{const s=o.newValue;if(!s||!t.has(s))return;const r=c[s.id];r&&(n.source=r)}))}},{id:"@jupyterlab/inspector-extension:notebooks",requires:[i.IInspector,a.INotebookTracker,s.ILabShell],autoStart:!0,activate:(e,n,t,o)=>{const s={};t.widgetAdded.connect(((e,n)=>{const t=n.sessionContext,o=n.content.rendermime,c=new i.KernelConnector({sessionContext:t}),r=new i.InspectionHandler({connector:c,rendermime:o});s[n.id]=r;const d=n.content.activeCell;r.editor=d&&d.editor,n.content.activeCellChanged.connect(((e,n)=>{r.editor=n&&n.editor})),n.disposed.connect((()=>{delete s[n.id],r.dispose()}))})),o.currentChanged.connect(((e,o)=>{const c=o.newValue;if(!c||!t.has(c))return;const r=s[c.id];r&&(n.source=r)}))}}]}}]);
//# sourceMappingURL=3708.52f7bec.js.map