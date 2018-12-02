import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WfConstants } from 'app/shared/wf-constants';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorizationInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const requestWithApiKey = req.clone({
            params: req.params
                .set(WfConstants.APPID_PARAM, WfConstants.APPID_VALUE)
        });
        return next.handle(requestWithApiKey);
    }

}
