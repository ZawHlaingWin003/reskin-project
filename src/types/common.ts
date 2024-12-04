export type Filters = {
    type: string;
    [key: string]: any
}

export type Game = {
    id: number;
    label: string;
    type: string;
}

export interface Promotion {
    image: string;
    title: string;
    content: string;
}

export interface Dream {
    id: number;
    title_mm: string;
    title_en: string;
    num_1: string;
    num_2: string;
    type: string;
    dreamBookId: number;
    created_at: string;
    updated_at: string;
    title_th: string;
    title_zh: string;
}

export interface User {
    name: string
    password: string
}

export interface UserInfo {
    account_id: string;
    amount: string;
    body_voucher_id: number;
    bugyee_expired_at: any;
    bugyee_room_code: any;
    bugyee_room_id: number;
    bugyee_room_passcode: any;
    commission: number;
    created_at: string;
    fcm: string;
    id: number
    is_card_enabled: boolean;
    is_football_enabled: boolean;
    is_loading: boolean;
    is_slot_enabled: boolean;
    is_suspend: boolean;
    is_twod_enabled: boolean;
    is_verified: boolean;
    last_ip: string;
    last_seen: string;
    maung_commission: number;
    maung_commission_two: number;
    maung_voucher_id: number;
    name: string;
    parent_id: number;
    passcodeForAbcd: string;
    passcodeForBugyee: any;
    passcodeForHorse: string;
    passcodeForSKM: any;
    passcodeForTigerDragon: string;
    phone: string;
    prefix_name: any;
    roles: string;
    sharing: any;
    skm_expired_at: any;
    skm_room_code: any;
    skm_room_id: any;
    skm_room_passcode: string;
    threed_voucher_id: number;
    twod_voucher_id: number;
    updated_at: string;
    user_name: string;
}