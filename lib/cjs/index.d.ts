declare const bundle: (rawCode: string) => Promise<{
    code: string;
    err: any;
}>;
export default bundle;
