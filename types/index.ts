export interface DatabaseConnection {
    username: string;
    password?: string;
    database: string;
    host: string;
    namespace?: string;
}

export interface ErrorMessage {
    status: number;
    statusMessage: string;
    stack?: string;
}

export interface SuccessMessage {
    status: number;
    message: string;
    id?: string;
    data?: any
}
export interface Response<T>
{
    data: T;
}

export interface Artist {
    address: {
        address_line_1: string;
        address_line_2: string | null;
        city: string;
        coordinates: [number, number];
        country: string;
        post_code: string;
    };
    company_name: string | null;
    email: string;
    first_name: string;
    id?: string;
    last_name: string;
    name: string;
    phone: string;
}

export interface RootInfo {
    namespaces: {
        [key: string]: string;
    };
    users: {
        [key: string]: string;
    };
}

export interface NamespaceInfo {
    databases: {
        [key: string]: string;
    };
    users: {
        [key: string]: string;
    };
    tokens: {
        [key: string]: string;
    };
}

export interface DatabaseInfo {
    analyzers: {
        [key: string]: string;
    };
    functions: {
        [key: string]: string;
    };
    params: {
        [key: string]: string;
    };
    scopes: {
        [key: string]: string;
    };
    tables: {
        [key: string]: string;
    };
}

export interface TableInfo {
    events: {
        [key: string]: string;
    };
    fields: {
        [key: string]: string;
    },
    indexes: {
        [key: string]: string;
    },
    lives: {
        [key: string]: string;
    },
    tables: {
        [key: string]: string;
    }
}