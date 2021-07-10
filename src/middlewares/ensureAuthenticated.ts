import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
    sub: string;
}


export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {

    // Receber o Token
    const authToken = request.headers.authorization

    // Validar se o Token esta preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {

        // Validar se o Token é válido
        const { sub } = verify(token, "edeadda2c034ba3752fcdc2c3f6b5034") as IPayload;

        // Recuperar informações do usuário
        request.user_id = sub;

        return next();

    } catch (err) {

        return response.status(401).end();

    }

}