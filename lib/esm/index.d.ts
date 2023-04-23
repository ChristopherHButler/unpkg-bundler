interface BundleArgs {
    rawCode: string;
    typescript?: boolean;
    versionTag?: string;
}
declare const bundle: ({ rawCode, typescript, versionTag }: BundleArgs) => Promise<{
    code: string;
    err: any;
}>;
export default bundle;
