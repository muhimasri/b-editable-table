import Vue, { PluginFunction, VueConstructor } from 'vue';

declare const BEditableTable: VueConstructor<Vue> & { install: PluginFunction<any>; };
export default BEditableTable;
