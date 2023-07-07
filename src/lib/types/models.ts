import { Axios, AxiosRequestConfig, AxiosResponse } from 'axios';
import { FeatureConfig } from '../featureChecking';

type FilePermission = {};

type FileSharedLink = {};

type FileVersion = {
    id: string;
    type: 'file_version';
    sha1: string;
};

type FileWatermarkInfo = {
    is_watermarked: boolean;
};

export type BoxFile = {
    id: string;
    permissions: FilePermission;
    shared_link: FileSharedLink;
    sha1: string;
    file_version: FileVersion;
    name: string;
    size: number;
    extension: string;
    representations: any;
    watermark_info: FileWatermarkInfo;
    authenticated_download_url: string;
    is_download_available: boolean;
};

export type PreviewOptions = {
    advancedContentInsights: any | undefined; // Need to come back to
    apiHost: string | undefined;
    appHost: string | undefined;
    autoFocus: boolean | undefined;
    box3dApplication: any | undefined; // Need to come back to
    boxAnnotations: any | undefined; // Need to come back to
    container: HTMLElement | undefined;
    disableEventLog: boolean | undefined;
    downloadWM: boolean | undefined;
    enableAnnotationsDiscoverability: boolean | undefined;
    enableAnnotationsImageDiscoverability: boolean | undefined;
    enableAnnotationsOnlyControls: boolean | undefined;
    enableThumbbnailsSidebar: boolean | undefined;
    experiences: any | undefined; // Need to come back to
    features: FeatureConfig | undefined;
    fileOptions: Map<string, any> | undefined; // come back to
    fixDependencies: boolean | undefined;
    header: 'dark' | 'light' | 'none' | undefined;
    headerElement: HTMLElement | undefined;
    loaders: any | undefined; // Need to come back to
    logoUrl: string | undefined;
    previewWMPref: 'all' | 'any' | 'none' | undefined;
    queryParams: any | undefined; // Need to come back to
    requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig | undefined;
    responseInterceptor: (config: AxiosResponse) => AxiosResponse | undefined;
    sharedLink: string | undefined;
    sharedLinkPassword: string | undefined;
    showAnnotations: boolean | undefined;
    showAnnotationsControls: boolean | undefined;
    showAnnotationsDrawingCreate: boolean | undefined;
    showDownload: boolean | undefined;
    showLoading: boolean | undefined;
    skipServerUpdate: boolean | undefined;
    useHotkeys: boolean | undefined;
    viewers: any | undefined; // Need to come back to
};
