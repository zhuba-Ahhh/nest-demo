declare const _default: (() => {
    secret: string;
    audience: string;
    issuer: string;
    accessTokenTtl: number;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    secret: string;
    audience: string;
    issuer: string;
    accessTokenTtl: number;
}>;
export default _default;
