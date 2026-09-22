// Generated from the sanitized scan of admin@aura.com's account.
// Inlined as TypeScript rather than imported as JSON so the serverless bundle
// carries the data itself — Vercel's function tracing does not reliably ship
// separate .json files, which broke the deployed function.

export const companyFixture = {
  "_id": "6a21cf71cfa4b789b69bfcc5",
  "name": "aura",
  "slug": "aura"
};

export const inviteCodeFixture = {
  "inviteCode": "258866",
  "slug": "aura"
};

export const teamsFixture = [
  {
    "_id": "6a624f76c69fc235c6a2be36",
    "name": "Dev Team",
    "createdAt": "2026-07-23T17:29:26.349Z"
  },
  {
    "_id": "6a9abbe16cb14db3dde2d792",
    "name": "Sales Team",
    "createdAt": "2026-09-04T12:38:57.082Z"
  }
];

export const employeesFixture = [
  {
    "_id": "6a21cf71cfa4b789b69bfcc6",
    "firstName": "Shoham",
    "lastName": "Fellner",
    "email": "admin@aura.com",
    "roleTitle": "Admin",
    "role": "manager",
    "teamId": "6a624f76c69fc235c6a2be36",
    "hasAwsConnected": true,
    "createdAt": "2026-06-04T19:18:09.719Z"
  },
  {
    "_id": "6a5fac952d83ea0da84a7215",
    "firstName": "gilad",
    "lastName": "yavneh",
    "email": "gilad.yavneh@aura-demo.io",
    "roleTitle": "CEO",
    "role": "employee",
    "teamId": "6a624f76c69fc235c6a2be36",
    "hasAwsConnected": true,
    "createdAt": "2026-07-21T17:29:57.527Z"
  },
  {
    "_id": "6a6a32a44c25f2ef0de50b3d",
    "firstName": "Amit",
    "lastName": "Reich",
    "email": "amit.reich@aura-demo.io",
    "roleTitle": "Hapoel",
    "role": "employee",
    "teamId": "6a9abbe16cb14db3dde2d792",
    "hasAwsConnected": true,
    "createdAt": "2026-07-29T17:04:36.018Z"
  },
  {
    "_id": "6a9abe19cae23f8dd5528cf6",
    "firstName": "Bob",
    "lastName": "Marley",
    "email": "bob@aura.com",
    "roleTitle": "Dev",
    "role": "employee",
    "teamId": null,
    "hasAwsConnected": true,
    "createdAt": "2026-09-04T12:48:25.374Z"
  }
];

export const awsUsersFixture = [
  {
    "_id": "6a7855dea3ac6c2ab8c81caf",
    "source": "IAM",
    "externalId": "AIDAYSQSTUCUMYRRLPGR4",
    "arn": "arn:aws:iam::123456789012:user/Aura-KMS-Blocked-User",
    "name": "Aura-KMS-Blocked-User"
  },
  {
    "_id": "6a7855dea3ac6c2ab8c81cb0",
    "externalId": "AIDAYSQSTUCUGMRPYMVYP",
    "source": "IAM",
    "arn": "arn:aws:iam::123456789012:user/Aura-identity-user-block",
    "name": "Aura-identity-user-block"
  },
  {
    "_id": "6a7855dea3ac6c2ab8c81cb2",
    "externalId": "13d48842-f091-70e1-3027-81824fcbcaf2",
    "source": "SSO",
    "arn": null,
    "name": "Shoham"
  },
  {
    "_id": "6a7855dea3ac6c2ab8c81cb3",
    "source": "SSO",
    "externalId": "6354d8d2-4081-70f4-3b4f-7533de98b603",
    "arn": null,
    "name": "Aura-Read-Only-User"
  },
  {
    "_id": "6a7855dea3ac6c2ab8c81cb4",
    "externalId": "03847802-8041-706f-12f2-9487d45ef3a4",
    "source": "SSO",
    "arn": null,
    "name": "Gilad"
  },
  {
    "_id": "6a7855dea3ac6c2ab8c81cb5",
    "externalId": "c324f8e2-6051-707c-8d98-e0c22f1851a6",
    "source": "SSO",
    "arn": null,
    "name": "Amit"
  },
  {
    "_id": "6a7855dea3ac6c2ab8c81cb6",
    "externalId": "131458e2-8051-7076-81ba-894bd06f05fb",
    "source": "SSO",
    "arn": null,
    "name": "Aura-Sales-User"
  },
  {
    "_id": "6a84a562b8067bdf43d096f0",
    "externalId": "AIDAYSQSTUCUPP3OZHHLR",
    "source": "IAM",
    "arn": "arn:aws:iam::123456789012:user/Bob",
    "name": "Bob"
  }
];

export const watchlistPresetsFixture = [
  {
    "_id": "6a6251478cfd3c628c627105",
    "scopeId": "6a624f76c69fc235c6a2be36",
    "scopeType": "team",
    "__v": 0,
    "companyId": "6a21cf71cfa4b789b69bfcc5",
    "createdAt": "2026-07-23T17:37:10.933Z",
    "createdBy": "6a21cf71cfa4b789b69bfcc6",
    "name": "Testi Test",
    "resources": [
      {
        "arn": "arn:aws:s3:::aura-cloud-blocked-group-bucket",
        "actions": [
          "s3:Put*"
        ]
      }
    ],
    "updatedAt": "2026-09-08T08:41:18.085Z"
  },
  {
    "_id": "6a62565f8cfd3c628c6285f4",
    "scopeType": "individual",
    "scopeId": "6a5fac952d83ea0da84a7215",
    "__v": 0,
    "companyId": "6a21cf71cfa4b789b69bfcc5",
    "createdAt": "2026-07-23T17:58:54.896Z",
    "createdBy": "6a21cf71cfa4b789b69bfcc6",
    "name": "Gilad's Preset",
    "resources": [
      {
        "arn": "arn:aws:s3:::aura-cloud-blocked-group-bucket",
        "actions": [
          "s3:*"
        ]
      }
    ],
    "updatedAt": "2026-07-23T17:58:54.896Z"
  },
  {
    "_id": "6a6264dd8cfd3c628c628a16",
    "scopeId": "6a21cf71cfa4b789b69bfcc6",
    "scopeType": "individual",
    "__v": 0,
    "companyId": "6a21cf71cfa4b789b69bfcc5",
    "createdAt": "2026-07-23T19:00:44.788Z",
    "createdBy": "6a21cf71cfa4b789b69bfcc6",
    "name": "Shoham's Preset",
    "resources": [
      {
        "arn": "arn:aws:s3:::aura-cloud-bucket",
        "actions": [
          "s3:*"
        ]
      }
    ],
    "updatedAt": "2026-07-23T19:00:44.788Z"
  }
];

export const userPermissionsFixture = {
  "_id": "6a84920bb8067bdf43d01c2c",
  "userId": "AIDAYSQSTUCUPP3OZHHLR",
  "__v": 0,
  "createdAt": "2026-08-18T17:10:34.996Z",
  "name": "Shoham Fellner's Watchlist",
  "permissionsData": {
    "arn:aws:ec2:eu-north-1:123456789012:instance/i-0da92c89af81a6e8b": {
      "ec2:StartInstances": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/Sales-EC2-RestrictedAccess",
          "policyName": "Sales-EC2-RestrictedAccess",
          "sid": "AllowStartStopAllServers"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "AllowStartStopAllServers",
                "Effect": "Allow",
                "Action": [
                  "ec2:StartInstances",
                  "ec2:StopInstances"
                ],
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/Sales-EC2-RestrictedAccess",
                "policyName": "Sales-EC2-RestrictedAccess",
                "sid": "AllowStartStopAllServers"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/Sales-EC2-RestrictedAccess",
            "policyName": "Sales-EC2-RestrictedAccess",
            "sid": "AllowStartStopAllServers"
          }
        }
      },
      "startInstances": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/Sales-EC2-RestrictedAccess",
          "policyName": "Sales-EC2-RestrictedAccess",
          "sid": "AllowStartStopAllServers"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "AllowStartStopAllServers",
                "Effect": "Allow",
                "Action": [
                  "ec2:StartInstances",
                  "ec2:StopInstances"
                ],
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/Sales-EC2-RestrictedAccess",
                "policyName": "Sales-EC2-RestrictedAccess",
                "sid": "AllowStartStopAllServers"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/Sales-EC2-RestrictedAccess",
            "policyName": "Sales-EC2-RestrictedAccess",
            "sid": "AllowStartStopAllServers"
          }
        }
      }
    },
    "arn:aws:ec2:eu-north-1:123456789012:instance/i-04f5b67d37c7c2dc1": {
      "ec2:StartInstances": {
        "status": "error",
        "reason": "Explicit Deny in group \"Sales\" policy \"Sales-EC2-RestrictedAccess\" (Sid: ExplicitDenyProdServer)",
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/Sales-EC2-RestrictedAccess",
          "policyName": "Sales-EC2-RestrictedAccess",
          "sid": "ExplicitDenyProdServer"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "DENY",
              "matchedStatement": {
                "Sid": "ExplicitDenyProdServer",
                "Effect": "Deny",
                "Action": [
                  "ec2:StartInstances",
                  "ec2:StopInstances",
                  "ec2:TerminateInstances"
                ],
                "Resource": "arn:aws:ec2:eu-north-1:123456789012:instance/i-04f5b67d37c7c2dc1"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/Sales-EC2-RestrictedAccess",
                "policyName": "Sales-EC2-RestrictedAccess",
                "sid": "ExplicitDenyProdServer"
              },
              "reason": "Explicit Deny in group \"Sales\" policy \"Sales-EC2-RestrictedAccess\" (Sid: ExplicitDenyProdServer)"
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/Sales-EC2-RestrictedAccess",
            "policyName": "Sales-EC2-RestrictedAccess",
            "sid": "ExplicitDenyProdServer"
          }
        }
      },
      "startInstances": {
        "status": "error",
        "reason": "Explicit Deny in group \"Sales\" policy \"Sales-EC2-RestrictedAccess\" (Sid: ExplicitDenyProdServer)",
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/Sales-EC2-RestrictedAccess",
          "policyName": "Sales-EC2-RestrictedAccess",
          "sid": "ExplicitDenyProdServer"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "DENY",
              "matchedStatement": {
                "Sid": "ExplicitDenyProdServer",
                "Effect": "Deny",
                "Action": [
                  "ec2:StartInstances",
                  "ec2:StopInstances",
                  "ec2:TerminateInstances"
                ],
                "Resource": "arn:aws:ec2:eu-north-1:123456789012:instance/i-04f5b67d37c7c2dc1"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/Sales-EC2-RestrictedAccess",
                "policyName": "Sales-EC2-RestrictedAccess",
                "sid": "ExplicitDenyProdServer"
              },
              "reason": "Explicit Deny in group \"Sales\" policy \"Sales-EC2-RestrictedAccess\" (Sid: ExplicitDenyProdServer)"
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/Sales-EC2-RestrictedAccess",
            "policyName": "Sales-EC2-RestrictedAccess",
            "sid": "ExplicitDenyProdServer"
          }
        }
      },
      "ec2:*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Dev",
          "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
          "policyName": "AdministratorAccess"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Effect": "Allow",
                "Action": "*",
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Dev",
                "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
                "policyName": "AdministratorAccess"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Dev",
            "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
            "policyName": "AdministratorAccess"
          }
        }
      },
      "*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Dev",
          "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
          "policyName": "AdministratorAccess"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Effect": "Allow",
                "Action": "*",
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Dev",
                "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
                "policyName": "AdministratorAccess"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Dev",
            "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
            "policyName": "AdministratorAccess"
          }
        }
      },
      "ec2:Describe*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Dev",
          "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
          "policyName": "AdministratorAccess"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Effect": "Allow",
                "Action": "*",
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Dev",
                "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
                "policyName": "AdministratorAccess"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Dev",
            "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
            "policyName": "AdministratorAccess"
          }
        }
      },
      "describe*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Dev",
          "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
          "policyName": "AdministratorAccess"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Effect": "Allow",
                "Action": "*",
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Dev",
                "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
                "policyName": "AdministratorAccess"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Dev",
            "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
            "policyName": "AdministratorAccess"
          }
        }
      },
      "ec2:Start*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Dev",
          "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
          "policyName": "AdministratorAccess"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Effect": "Allow",
                "Action": "*",
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Dev",
                "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
                "policyName": "AdministratorAccess"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Dev",
            "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
            "policyName": "AdministratorAccess"
          }
        }
      },
      "start*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Dev",
          "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
          "policyName": "AdministratorAccess"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Effect": "Allow",
                "Action": "*",
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Dev",
                "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
                "policyName": "AdministratorAccess"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Dev",
            "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
            "policyName": "AdministratorAccess"
          }
        }
      },
      "ec2:Stop*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Dev",
          "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
          "policyName": "AdministratorAccess"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Effect": "Allow",
                "Action": "*",
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Dev",
                "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
                "policyName": "AdministratorAccess"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Dev",
            "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
            "policyName": "AdministratorAccess"
          }
        }
      },
      "stop*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Dev",
          "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
          "policyName": "AdministratorAccess"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Effect": "Allow",
                "Action": "*",
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Dev",
                "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
                "policyName": "AdministratorAccess"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Dev",
            "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
            "policyName": "AdministratorAccess"
          }
        }
      },
      "ec2:DescribeInstances": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/Sales-EC2-RestrictedAccess",
          "policyName": "Sales-EC2-RestrictedAccess",
          "sid": "AllowSeeAllServers"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "AllowSeeAllServers",
                "Effect": "Allow",
                "Action": "ec2:DescribeInstances",
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/Sales-EC2-RestrictedAccess",
                "policyName": "Sales-EC2-RestrictedAccess",
                "sid": "AllowSeeAllServers"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/Sales-EC2-RestrictedAccess",
            "policyName": "Sales-EC2-RestrictedAccess",
            "sid": "AllowSeeAllServers"
          }
        }
      },
      "describeInstances": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/Sales-EC2-RestrictedAccess",
          "policyName": "Sales-EC2-RestrictedAccess",
          "sid": "AllowSeeAllServers"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "AllowSeeAllServers",
                "Effect": "Allow",
                "Action": "ec2:DescribeInstances",
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/Sales-EC2-RestrictedAccess",
                "policyName": "Sales-EC2-RestrictedAccess",
                "sid": "AllowSeeAllServers"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/Sales-EC2-RestrictedAccess",
            "policyName": "Sales-EC2-RestrictedAccess",
            "sid": "AllowSeeAllServers"
          }
        }
      },
      "ec2:Reboot*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Dev",
          "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
          "policyName": "AdministratorAccess"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Effect": "Allow",
                "Action": "*",
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Dev",
                "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
                "policyName": "AdministratorAccess"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Dev",
            "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
            "policyName": "AdministratorAccess"
          }
        }
      },
      "reboot*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Dev",
          "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
          "policyName": "AdministratorAccess"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Effect": "Allow",
                "Action": "*",
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Dev",
                "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
                "policyName": "AdministratorAccess"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Dev",
            "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
            "policyName": "AdministratorAccess"
          }
        }
      },
      "ec2:Terminate*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Dev",
          "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
          "policyName": "AdministratorAccess"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Effect": "Allow",
                "Action": "*",
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Dev",
                "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
                "policyName": "AdministratorAccess"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Dev",
            "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
            "policyName": "AdministratorAccess"
          }
        }
      },
      "terminate*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Dev",
          "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
          "policyName": "AdministratorAccess"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Effect": "Allow",
                "Action": "*",
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Dev",
                "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
                "policyName": "AdministratorAccess"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Dev",
            "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
            "policyName": "AdministratorAccess"
          }
        }
      },
      "ec2:RunInstances": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Dev",
          "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
          "policyName": "AdministratorAccess"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Effect": "Allow",
                "Action": "*",
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Dev",
                "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
                "policyName": "AdministratorAccess"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Dev",
            "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
            "policyName": "AdministratorAccess"
          }
        }
      },
      "runInstances": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Dev",
          "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
          "policyName": "AdministratorAccess"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:53.280Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Effect": "Allow",
                "Action": "*",
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Dev",
                "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
                "policyName": "AdministratorAccess"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Dev",
            "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
            "policyName": "AdministratorAccess"
          }
        }
      }
    },
    "arn:aws:s3:::aura-cloud-bucket": {
      "s3:GetObject": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "FullAccessToOtherBuckets"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "FullAccessToOtherBuckets",
                "Effect": "Allow",
                "Action": "s3:*",
                "Resource": [
                  "arn:aws:s3:::aura-cloud-bucket",
                  "arn:aws:s3:::aura-cloud-bucket/*",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "FullAccessToOtherBuckets"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No matching Allow statement in resource policy"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "FullAccessToOtherBuckets"
          }
        }
      },
      "getObject": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "FullAccessToOtherBuckets"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "FullAccessToOtherBuckets",
                "Effect": "Allow",
                "Action": "s3:*",
                "Resource": [
                  "arn:aws:s3:::aura-cloud-bucket",
                  "arn:aws:s3:::aura-cloud-bucket/*",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "FullAccessToOtherBuckets"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No matching Allow statement in resource policy"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "FullAccessToOtherBuckets"
          }
        }
      },
      "s3:PutObject": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "FullAccessToOtherBuckets"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "FullAccessToOtherBuckets",
                "Effect": "Allow",
                "Action": "s3:*",
                "Resource": [
                  "arn:aws:s3:::aura-cloud-bucket",
                  "arn:aws:s3:::aura-cloud-bucket/*",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "FullAccessToOtherBuckets"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No matching Allow statement in resource policy"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "FullAccessToOtherBuckets"
          }
        }
      },
      "putObject": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "FullAccessToOtherBuckets"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "FullAccessToOtherBuckets",
                "Effect": "Allow",
                "Action": "s3:*",
                "Resource": [
                  "arn:aws:s3:::aura-cloud-bucket",
                  "arn:aws:s3:::aura-cloud-bucket/*",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "FullAccessToOtherBuckets"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No matching Allow statement in resource policy"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "FullAccessToOtherBuckets"
          }
        }
      },
      "s3:*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "FullAccessToOtherBuckets"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "FullAccessToOtherBuckets",
                "Effect": "Allow",
                "Action": "s3:*",
                "Resource": [
                  "arn:aws:s3:::aura-cloud-bucket",
                  "arn:aws:s3:::aura-cloud-bucket/*",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "FullAccessToOtherBuckets"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No matching Allow statement in resource policy"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "FullAccessToOtherBuckets"
          }
        }
      },
      "*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "FullAccessToOtherBuckets"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "FullAccessToOtherBuckets",
                "Effect": "Allow",
                "Action": "s3:*",
                "Resource": [
                  "arn:aws:s3:::aura-cloud-bucket",
                  "arn:aws:s3:::aura-cloud-bucket/*",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "FullAccessToOtherBuckets"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No matching Allow statement in resource policy"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "FullAccessToOtherBuckets"
          }
        }
      },
      "s3:Get*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "FullAccessToOtherBuckets"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "FullAccessToOtherBuckets",
                "Effect": "Allow",
                "Action": "s3:*",
                "Resource": [
                  "arn:aws:s3:::aura-cloud-bucket",
                  "arn:aws:s3:::aura-cloud-bucket/*",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "FullAccessToOtherBuckets"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No matching Allow statement in resource policy"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "FullAccessToOtherBuckets"
          }
        }
      },
      "get*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "FullAccessToOtherBuckets"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "FullAccessToOtherBuckets",
                "Effect": "Allow",
                "Action": "s3:*",
                "Resource": [
                  "arn:aws:s3:::aura-cloud-bucket",
                  "arn:aws:s3:::aura-cloud-bucket/*",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "FullAccessToOtherBuckets"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No matching Allow statement in resource policy"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "FullAccessToOtherBuckets"
          }
        }
      }
    },
    "arn:aws:s3:::block-sales-group": {
      "s3:GetObject": {
        "status": "error",
        "reason": "Explicit Deny in group \"Sales\" policy \"SalesBucketWriteOnlyPolicy\" (Sid: SalesDenyRead)",
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "SalesDenyRead"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "DENY",
              "matchedStatement": {
                "Sid": "SalesDenyRead",
                "Effect": "Deny",
                "Action": [
                  "s3:GetObject"
                ],
                "Resource": [
                  "arn:aws:s3:::block-sales-group/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "SalesDenyRead"
              },
              "reason": "Explicit Deny in group \"Sales\" policy \"SalesBucketWriteOnlyPolicy\" (Sid: SalesDenyRead)"
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "SalesDenyRead"
          }
        }
      },
      "getObject": {
        "status": "error",
        "reason": "Explicit Deny in group \"Sales\" policy \"SalesBucketWriteOnlyPolicy\" (Sid: SalesDenyRead)",
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "SalesDenyRead"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "DENY",
              "matchedStatement": {
                "Sid": "SalesDenyRead",
                "Effect": "Deny",
                "Action": [
                  "s3:GetObject"
                ],
                "Resource": [
                  "arn:aws:s3:::block-sales-group/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "SalesDenyRead"
              },
              "reason": "Explicit Deny in group \"Sales\" policy \"SalesBucketWriteOnlyPolicy\" (Sid: SalesDenyRead)"
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "SalesDenyRead"
          }
        }
      },
      "s3:PutObject": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "SalesAllowWriteAndList"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "SalesAllowWriteAndList",
                "Effect": "Allow",
                "Action": [
                  "s3:PutObject",
                  "s3:DeleteObject",
                  "s3:ListBucket"
                ],
                "Resource": [
                  "arn:aws:s3:::block-sales-group",
                  "arn:aws:s3:::block-sales-group/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "SalesAllowWriteAndList"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "SalesAllowWriteAndList"
          }
        }
      },
      "putObject": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "SalesAllowWriteAndList"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "SalesAllowWriteAndList",
                "Effect": "Allow",
                "Action": [
                  "s3:PutObject",
                  "s3:DeleteObject",
                  "s3:ListBucket"
                ],
                "Resource": [
                  "arn:aws:s3:::block-sales-group",
                  "arn:aws:s3:::block-sales-group/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "SalesAllowWriteAndList"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "SalesAllowWriteAndList"
          }
        }
      },
      "s3:*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Dev",
          "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
          "policyName": "AdministratorAccess"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Effect": "Allow",
                "Action": "*",
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Dev",
                "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
                "policyName": "AdministratorAccess"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Dev",
            "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
            "policyName": "AdministratorAccess"
          }
        }
      },
      "*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Dev",
          "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
          "policyName": "AdministratorAccess"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Effect": "Allow",
                "Action": "*",
                "Resource": "*"
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Dev",
                "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
                "policyName": "AdministratorAccess"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No resource policy (bucket policy) exists"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Dev",
            "policyArn": "arn:aws:iam::aws:policy/AdministratorAccess",
            "policyName": "AdministratorAccess"
          }
        }
      }
    },
    "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket": {
      "s3:*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "FullAccessToOtherBuckets"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "FullAccessToOtherBuckets",
                "Effect": "Allow",
                "Action": "s3:*",
                "Resource": [
                  "arn:aws:s3:::aura-cloud-bucket",
                  "arn:aws:s3:::aura-cloud-bucket/*",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "FullAccessToOtherBuckets"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No matching Allow statement in resource policy"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "FullAccessToOtherBuckets"
          }
        }
      },
      "*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "FullAccessToOtherBuckets"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "FullAccessToOtherBuckets",
                "Effect": "Allow",
                "Action": "s3:*",
                "Resource": [
                  "arn:aws:s3:::aura-cloud-bucket",
                  "arn:aws:s3:::aura-cloud-bucket/*",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "FullAccessToOtherBuckets"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No matching Allow statement in resource policy"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "FullAccessToOtherBuckets"
          }
        }
      },
      "s3:Put*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "FullAccessToOtherBuckets"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "FullAccessToOtherBuckets",
                "Effect": "Allow",
                "Action": "s3:*",
                "Resource": [
                  "arn:aws:s3:::aura-cloud-bucket",
                  "arn:aws:s3:::aura-cloud-bucket/*",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "FullAccessToOtherBuckets"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No matching Allow statement in resource policy"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "FullAccessToOtherBuckets"
          }
        }
      },
      "put*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "FullAccessToOtherBuckets"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "FullAccessToOtherBuckets",
                "Effect": "Allow",
                "Action": "s3:*",
                "Resource": [
                  "arn:aws:s3:::aura-cloud-bucket",
                  "arn:aws:s3:::aura-cloud-bucket/*",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "FullAccessToOtherBuckets"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No matching Allow statement in resource policy"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "FullAccessToOtherBuckets"
          }
        }
      },
      "s3:Get*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "FullAccessToOtherBuckets"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "FullAccessToOtherBuckets",
                "Effect": "Allow",
                "Action": "s3:*",
                "Resource": [
                  "arn:aws:s3:::aura-cloud-bucket",
                  "arn:aws:s3:::aura-cloud-bucket/*",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "FullAccessToOtherBuckets"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No matching Allow statement in resource policy"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "FullAccessToOtherBuckets"
          }
        }
      },
      "get*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "FullAccessToOtherBuckets"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "FullAccessToOtherBuckets",
                "Effect": "Allow",
                "Action": "s3:*",
                "Resource": [
                  "arn:aws:s3:::aura-cloud-bucket",
                  "arn:aws:s3:::aura-cloud-bucket/*",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "FullAccessToOtherBuckets"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No matching Allow statement in resource policy"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "FullAccessToOtherBuckets"
          }
        }
      },
      "s3:List*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "FullAccessToOtherBuckets"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "FullAccessToOtherBuckets",
                "Effect": "Allow",
                "Action": "s3:*",
                "Resource": [
                  "arn:aws:s3:::aura-cloud-bucket",
                  "arn:aws:s3:::aura-cloud-bucket/*",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "FullAccessToOtherBuckets"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No matching Allow statement in resource policy"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "FullAccessToOtherBuckets"
          }
        }
      },
      "list*": {
        "status": "valid",
        "reason": null,
        "origin": {
          "sourceType": "group",
          "groupName": "Sales",
          "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
          "policyName": "SalesBucketWriteOnlyPolicy",
          "sid": "FullAccessToOtherBuckets"
        },
        "timestamp": "2026-09-22T10:21:57.912Z",
        "evaluatedAt": "2026-09-22T10:21:57.625Z",
        "details": {
          "context": {
            "aws:userid": "AIDAYSQSTUCUPP3OZHHLR",
            "aws:username": "Bob",
            "aws:principalaccount": "123456789012",
            "aws:principaltag/department": ""
          },
          "steps": {
            "scp": {
              "status": "ALLOW"
            },
            "identity": {
              "status": "ALLOW",
              "matchedStatement": {
                "Sid": "FullAccessToOtherBuckets",
                "Effect": "Allow",
                "Action": "s3:*",
                "Resource": [
                  "arn:aws:s3:::aura-cloud-bucket",
                  "arn:aws:s3:::aura-cloud-bucket/*",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket",
                  "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket/*"
                ]
              },
              "origin": {
                "sourceType": "group",
                "groupName": "Sales",
                "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
                "policyName": "SalesBucketWriteOnlyPolicy",
                "sid": "FullAccessToOtherBuckets"
              }
            },
            "resource": {
              "status": "IMPLICIT_DENY",
              "reason": "No matching Allow statement in resource policy"
            },
            "accountCheck": {
              "treatAsSameAccount": true,
              "isSameAccount": true
            }
          },
          "origin": {
            "sourceType": "group",
            "groupName": "Sales",
            "policyArn": "arn:aws:iam::123456789012:policy/SalesBucketWriteOnlyPolicy",
            "policyName": "SalesBucketWriteOnlyPolicy",
            "sid": "FullAccessToOtherBuckets"
          }
        }
      }
    }
  },
  "updatedAt": "2026-09-22T10:21:57.913Z",
  "resourceStatuses": {
    "arn:aws:ec2:eu-north-1:123456789012:instance/i-0da92c89af81a6e8b": "healthy",
    "arn:aws:ec2:eu-north-1:123456789012:instance/i-04f5b67d37c7c2dc1": "blocked",
    "arn:aws:s3:::aura-cloud-bucket": "healthy",
    "arn:aws:s3:::block-sales-group": "blocked",
    "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket": "healthy"
  }
};

export const userResourceWatchlistFixture = [
  {
    "_id": "6a8492099b6079bd9259720e",
    "name": "Shoham Fellner's Watchlist",
    "userId": "AIDAYSQSTUCUPP3OZHHLR",
    "resources": [
      {
        "arn": "arn:aws:ec2:eu-north-1:123456789012:instance/i-0da92c89af81a6e8b",
        "actions": [
          "ec2:StartInstances"
        ],
        "name": "stage-db-server",
        "status": "healthy"
      },
      {
        "arn": "arn:aws:ec2:eu-north-1:123456789012:instance/i-04f5b67d37c7c2dc1",
        "actions": [
          "ec2:StartInstances",
          "ec2:*",
          "ec2:Describe*",
          "ec2:Start*",
          "ec2:Stop*",
          "ec2:DescribeInstances",
          "ec2:Reboot*",
          "ec2:Terminate*",
          "ec2:RunInstances"
        ],
        "name": "prod-db-server",
        "status": "blocked"
      },
      {
        "arn": "arn:aws:s3:::aura-cloud-bucket",
        "actions": [
          "s3:GetObject",
          "s3:PutObject",
          "s3:*",
          "s3:Get*"
        ],
        "name": "aura-cloud-bucket",
        "status": "healthy"
      },
      {
        "arn": "arn:aws:s3:::block-sales-group",
        "actions": [
          "s3:GetObject",
          "s3:PutObject",
          "s3:*"
        ],
        "name": "block-sales-group",
        "status": "blocked"
      },
      {
        "arn": "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket",
        "actions": [
          "s3:*",
          "s3:Put*",
          "s3:Get*",
          "s3:List*"
        ],
        "name": "aura-cloud-blocked-sso-user-bucket",
        "status": "healthy"
      }
    ],
    "createdAt": "2026-08-18T17:10:33.596Z",
    "updatedAt": "2026-09-08T10:41:28.182Z",
    "__v": 0
  }
];

export const presetResourcesFixture = {
  "resources": [
    {
      "arn": "arn:aws:s3:::aura-cloud-bucket",
      "actions": [
        "s3:*"
      ]
    },
    {
      "arn": "arn:aws:s3:::aura-cloud-blocked-group-bucket",
      "actions": [
        "s3:Put*"
      ]
    }
  ]
};

export const resourcesFixture = [
  {
    "_id": "6a96b3b1b4827f7cf386fc41",
    "arn": "arn:aws:ec2:eu-north-1:123456789012:instance/i-04f5b67d37c7c2dc1",
    "accountId": "123456789012",
    "name": "prod-db-server",
    "region": "eu-north-1",
    "resourceType": "EC2Instance",
    "createdAt": "2026-09-01T11:14:57.687Z",
    "lastSyncedAt": "2026-09-22T10:21:57.126Z",
    "updatedAt": "2026-09-22T10:21:57.135Z",
    "metadata": {
      "InstanceType": "t3.micro",
      "State": {
        "Code": 80,
        "Name": "stopped"
      },
      "region": "eu-north-1"
    }
  },
  {
    "_id": "6a96b3b1b4827f7cf386fc42",
    "arn": "arn:aws:ec2:eu-north-1:123456789012:instance/i-0da92c89af81a6e8b",
    "accountId": "123456789012",
    "name": "stage-db-server",
    "region": "eu-north-1",
    "resourceType": "EC2Instance",
    "createdAt": "2026-09-01T11:14:57.687Z",
    "lastSyncedAt": "2026-09-22T10:21:57.126Z",
    "updatedAt": "2026-09-22T10:21:57.135Z",
    "metadata": {
      "InstanceType": "t3.micro",
      "State": {
        "Code": 80,
        "Name": "stopped"
      },
      "region": "eu-north-1"
    }
  },
  {
    "_id": "6a8dbc90b4827f7cf37d7e9f",
    "arn": "arn:aws:s3:::aura-cloud-blocked-group-bucket",
    "accountId": "123456789012",
    "name": "aura-cloud-blocked-group-bucket",
    "region": "",
    "resourceType": "S3Bucket",
    "createdAt": "2026-08-25T16:02:23.928Z",
    "lastSyncedAt": "2026-09-22T10:21:57.126Z",
    "updatedAt": "2026-09-22T10:21:57.135Z",
    "metadata": {
      "CreationDate": "2026-04-23T15:14:13.000Z",
      "bucketLocation": "eu-central-1"
    }
  },
  {
    "_id": "6a8dbc90b4827f7cf37d7e9c",
    "arn": "arn:aws:s3:::aura-cloud-blocked-role-bucket",
    "accountId": "123456789012",
    "name": "aura-cloud-blocked-role-bucket",
    "region": "",
    "resourceType": "S3Bucket",
    "createdAt": "2026-08-25T16:02:23.928Z",
    "lastSyncedAt": "2026-09-22T10:21:57.126Z",
    "updatedAt": "2026-09-22T10:21:57.135Z",
    "metadata": {
      "CreationDate": "2026-06-04T17:42:01.000Z",
      "bucketLocation": "eu-central-1"
    }
  },
  {
    "_id": "6a8dbc90b4827f7cf37d7e9d",
    "arn": "arn:aws:s3:::aura-cloud-blocked-sso-user-bucket",
    "accountId": "123456789012",
    "name": "aura-cloud-blocked-sso-user-bucket",
    "region": "",
    "resourceType": "S3Bucket",
    "createdAt": "2026-08-25T16:02:23.928Z",
    "lastSyncedAt": "2026-09-22T10:21:57.126Z",
    "updatedAt": "2026-09-22T10:21:57.135Z",
    "metadata": {
      "CreationDate": "2026-04-23T14:30:43.000Z",
      "bucketLocation": "eu-north-1"
    }
  },
  {
    "_id": "6a8dbc90b4827f7cf37d7e99",
    "arn": "arn:aws:s3:::aura-cloud-bucket",
    "accountId": "123456789012",
    "name": "aura-cloud-bucket",
    "region": "",
    "resourceType": "S3Bucket",
    "createdAt": "2026-08-25T16:02:23.928Z",
    "lastSyncedAt": "2026-09-22T10:21:57.126Z",
    "updatedAt": "2026-09-22T10:21:57.135Z",
    "metadata": {
      "CreationDate": "2026-04-20T10:36:42.000Z",
      "bucketLocation": "eu-north-1"
    }
  },
  {
    "_id": "6a8dbc90b4827f7cf37d7e9a",
    "arn": "arn:aws:s3:::aura-cloud-user-identity-bucket",
    "accountId": "123456789012",
    "name": "aura-cloud-user-identity-bucket",
    "region": "",
    "resourceType": "S3Bucket",
    "createdAt": "2026-08-25T16:02:23.928Z",
    "lastSyncedAt": "2026-09-22T10:21:57.126Z",
    "updatedAt": "2026-09-22T10:21:57.135Z",
    "metadata": {
      "CreationDate": "2026-04-23T12:46:32.000Z",
      "bucketLocation": "eu-north-1"
    }
  },
  {
    "_id": "6a8dbc90b4827f7cf37d7e9e",
    "arn": "arn:aws:s3:::aura-public-templates",
    "accountId": "123456789012",
    "name": "aura-public-templates",
    "region": "",
    "resourceType": "S3Bucket",
    "createdAt": "2026-08-25T16:02:23.928Z",
    "lastSyncedAt": "2026-09-22T10:21:57.126Z",
    "updatedAt": "2026-09-22T10:21:57.135Z",
    "metadata": {
      "CreationDate": "2026-05-23T10:32:59.000Z",
      "bucketLocation": "eu-central-1"
    }
  },
  {
    "_id": "6a8dbc90b4827f7cf37d7e9b",
    "arn": "arn:aws:s3:::block-sales-group",
    "accountId": "123456789012",
    "name": "block-sales-group",
    "region": "",
    "resourceType": "S3Bucket",
    "createdAt": "2026-08-25T16:02:23.928Z",
    "lastSyncedAt": "2026-09-22T10:21:57.126Z",
    "updatedAt": "2026-09-22T10:21:57.135Z",
    "metadata": {
      "CreationDate": "2026-08-12T19:56:55.000Z",
      "bucketLocation": "eu-central-1"
    }
  }
];

export const resourceActionsFixture = {
  "ec2": [
    {
      "_id": "6a775ea6a3ac6c2ab8c7d669",
      "actionName": "ec2:*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:49.972Z",
      "lastSeenAt": "2026-08-08T17:03:27.390Z",
      "updatedAt": "2026-08-08T17:03:27.391Z"
    },
    {
      "_id": "6a775ea6a3ac6c2ab8c7d66a",
      "actionName": "ec2:Describe*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:50.055Z",
      "lastSeenAt": "2026-08-08T17:03:27.462Z",
      "updatedAt": "2026-08-08T17:03:27.463Z"
    },
    {
      "_id": "6a775ea6a3ac6c2ab8c7d66b",
      "actionName": "ec2:Start*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:50.127Z",
      "lastSeenAt": "2026-08-08T17:03:27.703Z",
      "updatedAt": "2026-08-08T17:03:27.703Z"
    },
    {
      "_id": "6a775ea6a3ac6c2ab8c7d66c",
      "actionName": "ec2:Stop*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:50.201Z",
      "lastSeenAt": "2026-08-08T17:03:27.778Z",
      "updatedAt": "2026-08-08T17:03:27.779Z"
    },
    {
      "_id": "6a775ea6a3ac6c2ab8c7d66d",
      "actionName": "ec2:Reboot*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:50.274Z",
      "lastSeenAt": "2026-08-08T17:03:27.851Z",
      "updatedAt": "2026-08-08T17:03:27.852Z"
    },
    {
      "_id": "6a775ea6a3ac6c2ab8c7d66e",
      "actionName": "ec2:Terminate*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:50.349Z",
      "lastSeenAt": "2026-08-08T17:03:27.926Z",
      "updatedAt": "2026-08-08T17:03:27.926Z"
    },
    {
      "_id": "6a775ea6a3ac6c2ab8c7d66f",
      "actionName": "ec2:RunInstances",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:50.424Z",
      "lastSeenAt": "2026-08-08T17:04:37.909Z",
      "updatedAt": "2026-08-08T17:04:37.909Z"
    },
    {
      "_id": "6a775ea6a3ac6c2ab8c7d670",
      "actionName": "ec2:DescribeInstances",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:50.497Z",
      "lastSeenAt": "2026-08-08T17:03:58.363Z",
      "updatedAt": "2026-08-08T17:03:58.363Z"
    },
    {
      "_id": "6a775ea7a3ac6c2ab8c7d674",
      "resourceType": "ec2",
      "actionName": "ec2:StartInstances",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:51.034Z",
      "lastSeenAt": "2026-08-08T17:04:38.503Z",
      "updatedAt": "2026-08-08T17:04:38.503Z"
    },
    {
      "_id": "6a775ea6a3ac6c2ab8c7d671",
      "actionName": "ec2:DescribeInstanceStatus",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:50.820Z",
      "lastSeenAt": "2026-08-08T17:03:58.051Z",
      "updatedAt": "2026-08-08T17:03:58.051Z"
    },
    {
      "_id": "6a775ea6a3ac6c2ab8c7d672",
      "actionName": "ec2:DescribeInstanceAttribute",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:50.892Z",
      "lastSeenAt": "2026-08-08T17:03:57.265Z",
      "updatedAt": "2026-08-08T17:03:57.265Z"
    },
    {
      "_id": "6a775ea7a3ac6c2ab8c7d673",
      "actionName": "ec2:DescribeInstanceTypes",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:50.963Z",
      "lastSeenAt": "2026-08-08T17:03:58.290Z",
      "updatedAt": "2026-08-08T17:03:58.290Z"
    },
    {
      "_id": "6a775ea7a3ac6c2ab8c7d675",
      "actionName": "ec2:StopInstances",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:51.105Z",
      "lastSeenAt": "2026-08-08T17:04:38.790Z",
      "updatedAt": "2026-08-08T17:04:38.791Z"
    },
    {
      "_id": "6a775ea7a3ac6c2ab8c7d676",
      "actionName": "ec2:RebootInstances",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:51.177Z",
      "lastSeenAt": "2026-08-08T17:04:34.756Z",
      "updatedAt": "2026-08-08T17:04:34.756Z"
    },
    {
      "_id": "6a775ea7a3ac6c2ab8c7d677",
      "actionName": "ec2:TerminateInstances",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:51.248Z",
      "lastSeenAt": "2026-08-08T17:04:38.940Z",
      "updatedAt": "2026-08-08T17:04:38.940Z"
    },
    {
      "_id": "6a775ea7a3ac6c2ab8c7d678",
      "actionName": "ec2:ModifyInstanceAttribute",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:51.320Z",
      "lastSeenAt": "2026-08-08T17:04:28.696Z",
      "updatedAt": "2026-08-08T17:04:28.696Z"
    },
    {
      "_id": "6a775ea7a3ac6c2ab8c7d679",
      "resourceType": "ec2",
      "actionName": "ec2:MonitorInstances",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:51.392Z",
      "lastSeenAt": "2026-08-08T17:04:33.649Z",
      "updatedAt": "2026-08-08T17:04:33.649Z"
    },
    {
      "_id": "6a775ea7a3ac6c2ab8c7d67a",
      "actionName": "ec2:UnmonitorInstances",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:51.464Z",
      "lastSeenAt": "2026-08-08T17:04:39.303Z",
      "updatedAt": "2026-08-08T17:04:39.303Z"
    },
    {
      "_id": "6a775ea7a3ac6c2ab8c7d67b",
      "actionName": "ec2:AttachVolume",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:51.535Z",
      "lastSeenAt": "2026-08-08T17:03:33.436Z",
      "updatedAt": "2026-08-08T17:03:33.436Z"
    },
    {
      "_id": "6a775ea7a3ac6c2ab8c7d67c",
      "actionName": "ec2:DetachVolume",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:51.607Z",
      "lastSeenAt": "2026-08-08T17:04:13.256Z",
      "updatedAt": "2026-08-08T17:04:13.256Z"
    },
    {
      "_id": "6a775ea7a3ac6c2ab8c7d67d",
      "actionName": "ec2:DescribeVolumes",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:51.688Z",
      "lastSeenAt": "2026-08-08T17:04:08.258Z",
      "updatedAt": "2026-08-08T17:04:08.258Z"
    },
    {
      "_id": "6a775ea7a3ac6c2ab8c7d67e",
      "actionName": "ec2:DescribeVolumeStatus",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:51.759Z",
      "lastSeenAt": "2026-08-08T17:04:08.182Z",
      "updatedAt": "2026-08-08T17:04:08.182Z"
    },
    {
      "_id": "6a775ea7a3ac6c2ab8c7d67f",
      "actionName": "ec2:CreateSnapshot",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:51.831Z",
      "lastSeenAt": "2026-08-08T17:03:40.576Z",
      "updatedAt": "2026-08-08T17:03:40.576Z"
    },
    {
      "_id": "6a775ea8a3ac6c2ab8c7d680",
      "resourceType": "ec2",
      "actionName": "ec2:DescribeSnapshots",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:51.902Z",
      "lastSeenAt": "2026-08-08T17:04:04.929Z",
      "updatedAt": "2026-08-08T17:04:04.929Z"
    },
    {
      "_id": "6a775ea8a3ac6c2ab8c7d681",
      "resourceType": "ec2",
      "actionName": "ec2:DeleteSnapshot",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:51.973Z",
      "lastSeenAt": "2026-08-08T17:03:48.525Z",
      "updatedAt": "2026-08-08T17:03:48.525Z"
    },
    {
      "_id": "6a775ea8a3ac6c2ab8c7d682",
      "actionName": "ec2:DescribeSecurityGroups",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:52.045Z",
      "lastSeenAt": "2026-08-08T17:04:04.494Z",
      "updatedAt": "2026-08-08T17:04:04.494Z"
    },
    {
      "_id": "6a775ea8a3ac6c2ab8c7d683",
      "resourceType": "ec2",
      "actionName": "ec2:AuthorizeSecurityGroupIngress",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:52.116Z",
      "lastSeenAt": "2026-08-08T17:03:33.727Z",
      "updatedAt": "2026-08-08T17:03:33.727Z"
    },
    {
      "_id": "6a775ea8a3ac6c2ab8c7d684",
      "actionName": "ec2:AuthorizeSecurityGroupEgress",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:52.189Z",
      "lastSeenAt": "2026-08-08T17:03:33.654Z",
      "updatedAt": "2026-08-08T17:03:33.654Z"
    },
    {
      "_id": "6a775ea8a3ac6c2ab8c7d685",
      "actionName": "ec2:RevokeSecurityGroupIngress",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:52.261Z",
      "lastSeenAt": "2026-08-08T17:04:37.838Z",
      "updatedAt": "2026-08-08T17:04:37.838Z"
    },
    {
      "_id": "6a775ea8a3ac6c2ab8c7d686",
      "actionName": "ec2:RevokeSecurityGroupEgress",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:52.332Z",
      "lastSeenAt": "2026-08-08T17:04:37.766Z",
      "updatedAt": "2026-08-08T17:04:37.767Z"
    },
    {
      "_id": "6a775ea8a3ac6c2ab8c7d687",
      "actionName": "ec2:DescribeSubnets",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:52.403Z",
      "lastSeenAt": "2026-08-08T17:04:05.874Z",
      "updatedAt": "2026-08-08T17:04:05.874Z"
    },
    {
      "_id": "6a775ea8a3ac6c2ab8c7d688",
      "actionName": "ec2:DescribeVpcs",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:52.476Z",
      "lastSeenAt": "2026-08-08T17:04:11.021Z",
      "updatedAt": "2026-08-08T17:04:11.172Z"
    },
    {
      "_id": "6a775ea8a3ac6c2ab8c7d689",
      "resourceType": "ec2",
      "actionName": "ec2:DescribeNetworkInterfaces",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:52.546Z",
      "lastSeenAt": "2026-08-08T17:04:02.515Z",
      "updatedAt": "2026-08-08T17:04:02.515Z"
    },
    {
      "_id": "6a775ea8a3ac6c2ab8c7d68a",
      "actionName": "ec2:AttachNetworkInterface",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:52.619Z",
      "lastSeenAt": "2026-08-08T17:03:33.174Z",
      "updatedAt": "2026-08-08T17:03:33.174Z"
    },
    {
      "_id": "6a775ea8a3ac6c2ab8c7d68b",
      "resourceType": "ec2",
      "actionName": "ec2:DetachNetworkInterface",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:52.708Z",
      "lastSeenAt": "2026-08-08T17:04:13.035Z",
      "updatedAt": "2026-08-08T17:04:13.035Z"
    },
    {
      "_id": "6a775ea8a3ac6c2ab8c7d68c",
      "actionName": "ec2:AssociateIamInstanceProfile",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:52.779Z",
      "lastSeenAt": "2026-08-08T17:03:31.374Z",
      "updatedAt": "2026-08-08T17:03:31.374Z"
    },
    {
      "_id": "6a775ea8a3ac6c2ab8c7d68d",
      "actionName": "ec2:DisassociateIamInstanceProfile",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:52.855Z",
      "lastSeenAt": "2026-08-08T17:04:15.926Z",
      "updatedAt": "2026-08-08T17:04:15.926Z"
    },
    {
      "_id": "6a775ea9a3ac6c2ab8c7d68e",
      "resourceType": "ec2",
      "actionName": "ec2:ReplaceIamInstanceProfileAssociation",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:52.929Z",
      "lastSeenAt": "2026-08-08T17:04:35.887Z",
      "updatedAt": "2026-08-08T17:04:35.887Z"
    },
    {
      "_id": "6a775ea9a3ac6c2ab8c7d68f",
      "actionName": "ec2:DescribeIamInstanceProfileAssociations",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:53.015Z",
      "lastSeenAt": "2026-08-08T17:03:56.427Z",
      "updatedAt": "2026-08-08T17:03:56.427Z"
    },
    {
      "_id": "6a775ea9a3ac6c2ab8c7d694",
      "actionName": "ec2:GetConsoleOutput",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:53.087Z",
      "lastSeenAt": "2026-08-08T17:04:22.092Z",
      "updatedAt": "2026-08-08T17:04:22.092Z"
    },
    {
      "_id": "6a775ea9a3ac6c2ab8c7d695",
      "actionName": "ec2:GetConsoleScreenshot",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:53.159Z",
      "lastSeenAt": "2026-08-08T17:04:22.172Z",
      "updatedAt": "2026-08-08T17:04:22.172Z"
    },
    {
      "_id": "6a775ea9a3ac6c2ab8c7d696",
      "resourceType": "ec2",
      "actionName": "ec2:GetPasswordData",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:53.231Z",
      "lastSeenAt": "2026-08-08T17:04:24.777Z",
      "updatedAt": "2026-08-08T17:04:24.777Z"
    },
    {
      "_id": "6a775ea9a3ac6c2ab8c7d697",
      "actionName": "ec2:CreateTags",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:53.302Z",
      "lastSeenAt": "2026-08-08T17:03:41.048Z",
      "updatedAt": "2026-08-08T17:03:41.048Z"
    },
    {
      "_id": "6a775ea9a3ac6c2ab8c7d698",
      "resourceType": "ec2",
      "actionName": "ec2:DeleteTags",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:53.382Z",
      "lastSeenAt": "2026-08-08T17:03:48.898Z",
      "updatedAt": "2026-08-08T17:03:48.898Z"
    },
    {
      "_id": "6a775ea9a3ac6c2ab8c7d699",
      "resourceType": "ec2",
      "actionName": "ec2:DescribeTags",
      "__v": 0,
      "createdAt": "2026-08-08T16:51:53.465Z",
      "lastSeenAt": "2026-08-08T17:04:05.950Z",
      "updatedAt": "2026-08-08T17:04:05.950Z"
    },
    {
      "_id": "6a77615fa3ac6c2ab8c7d738",
      "actionName": "ec2:Get*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:27.548Z",
      "lastSeenAt": "2026-08-08T17:03:27.547Z",
      "updatedAt": "2026-08-08T17:03:27.548Z"
    },
    {
      "_id": "6a77615fa3ac6c2ab8c7d739",
      "resourceType": "ec2",
      "actionName": "ec2:List*",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:27.618Z",
      "lastSeenAt": "2026-08-08T17:03:27.618Z",
      "updatedAt": "2026-08-08T17:03:27.618Z"
    },
    {
      "_id": "6a776160a3ac6c2ab8c7d73a",
      "actionName": "ec2:Run*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:27.997Z",
      "lastSeenAt": "2026-08-08T17:03:27.997Z",
      "updatedAt": "2026-08-08T17:03:27.997Z"
    },
    {
      "_id": "6a776160a3ac6c2ab8c7d73b",
      "actionName": "ec2:Create*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:28.068Z",
      "lastSeenAt": "2026-08-08T17:03:28.068Z",
      "updatedAt": "2026-08-08T17:03:28.068Z"
    },
    {
      "_id": "6a776160a3ac6c2ab8c7d73c",
      "actionName": "ec2:Delete*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:28.140Z",
      "lastSeenAt": "2026-08-08T17:03:28.140Z",
      "updatedAt": "2026-08-08T17:03:28.140Z"
    },
    {
      "_id": "6a776160a3ac6c2ab8c7d73d",
      "actionName": "ec2:Modify*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:28.212Z",
      "lastSeenAt": "2026-08-08T17:03:28.212Z",
      "updatedAt": "2026-08-08T17:03:28.212Z"
    },
    {
      "_id": "6a776160a3ac6c2ab8c7d73e",
      "actionName": "ec2:Attach*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:28.284Z",
      "lastSeenAt": "2026-08-08T17:03:28.284Z",
      "updatedAt": "2026-08-08T17:03:28.284Z"
    },
    {
      "_id": "6a776160a3ac6c2ab8c7d73f",
      "actionName": "ec2:Detach*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:28.355Z",
      "lastSeenAt": "2026-08-08T17:03:28.355Z",
      "updatedAt": "2026-08-08T17:03:28.355Z"
    },
    {
      "_id": "6a776160a3ac6c2ab8c7d740",
      "actionName": "ec2:Associate*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:28.426Z",
      "lastSeenAt": "2026-08-08T17:03:28.426Z",
      "updatedAt": "2026-08-08T17:03:28.426Z"
    },
    {
      "_id": "6a776160a3ac6c2ab8c7d741",
      "actionName": "ec2:Disassociate*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:28.497Z",
      "lastSeenAt": "2026-08-08T17:03:28.497Z",
      "updatedAt": "2026-08-08T17:03:28.497Z"
    },
    {
      "_id": "6a776160a3ac6c2ab8c7d742",
      "actionName": "ec2:Authorize*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:28.568Z",
      "lastSeenAt": "2026-08-08T17:03:28.568Z",
      "updatedAt": "2026-08-08T17:03:28.568Z"
    },
    {
      "_id": "6a776160a3ac6c2ab8c7d743",
      "actionName": "ec2:Revoke*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:28.640Z",
      "lastSeenAt": "2026-08-08T17:03:28.640Z",
      "updatedAt": "2026-08-08T17:03:28.640Z"
    },
    {
      "_id": "6a776160a3ac6c2ab8c7d744",
      "actionName": "ec2:Enable*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:28.710Z",
      "lastSeenAt": "2026-08-08T17:03:28.710Z",
      "updatedAt": "2026-08-08T17:03:28.710Z"
    },
    {
      "_id": "6a776160a3ac6c2ab8c7d745",
      "actionName": "ec2:Disable*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:28.782Z",
      "lastSeenAt": "2026-08-08T17:03:28.782Z",
      "updatedAt": "2026-08-08T17:03:28.782Z"
    },
    {
      "_id": "6a776160a3ac6c2ab8c7d746",
      "actionName": "ec2:Register*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:28.853Z",
      "lastSeenAt": "2026-08-08T17:03:28.853Z",
      "updatedAt": "2026-08-08T17:03:28.853Z"
    },
    {
      "_id": "6a776161a3ac6c2ab8c7d747",
      "actionName": "ec2:Deregister*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:28.924Z",
      "lastSeenAt": "2026-08-08T17:03:28.924Z",
      "updatedAt": "2026-08-08T17:03:28.924Z"
    },
    {
      "_id": "6a776161a3ac6c2ab8c7d748",
      "actionName": "ec2:Purchase*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:28.996Z",
      "lastSeenAt": "2026-08-08T17:03:28.996Z",
      "updatedAt": "2026-08-08T17:03:28.996Z"
    },
    {
      "_id": "6a776161a3ac6c2ab8c7d749",
      "actionName": "ec2:Cancel*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:29.067Z",
      "lastSeenAt": "2026-08-08T17:03:29.067Z",
      "updatedAt": "2026-08-08T17:03:29.067Z"
    },
    {
      "_id": "6a776161a3ac6c2ab8c7d74a",
      "actionName": "ec2:Accept*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:29.138Z",
      "lastSeenAt": "2026-08-08T17:03:29.138Z",
      "updatedAt": "2026-08-08T17:03:29.138Z"
    },
    {
      "_id": "6a776161a3ac6c2ab8c7d74b",
      "resourceType": "ec2",
      "actionName": "ec2:Reject*",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:29.209Z",
      "lastSeenAt": "2026-08-08T17:03:29.209Z",
      "updatedAt": "2026-08-08T17:03:29.209Z"
    },
    {
      "_id": "6a776161a3ac6c2ab8c7d74c",
      "actionName": "ec2:Assign*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:29.280Z",
      "lastSeenAt": "2026-08-08T17:03:29.280Z",
      "updatedAt": "2026-08-08T17:03:29.280Z"
    },
    {
      "_id": "6a776161a3ac6c2ab8c7d74d",
      "resourceType": "ec2",
      "actionName": "ec2:Unassign*",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:29.351Z",
      "lastSeenAt": "2026-08-08T17:03:29.351Z",
      "updatedAt": "2026-08-08T17:03:29.351Z"
    },
    {
      "_id": "6a776161a3ac6c2ab8c7d74e",
      "actionName": "ec2:Import*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:29.423Z",
      "lastSeenAt": "2026-08-08T17:03:29.423Z",
      "updatedAt": "2026-08-08T17:03:29.423Z"
    },
    {
      "_id": "6a776161a3ac6c2ab8c7d74f",
      "actionName": "ec2:Export*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:29.493Z",
      "lastSeenAt": "2026-08-08T17:03:29.493Z",
      "updatedAt": "2026-08-08T17:03:29.493Z"
    },
    {
      "_id": "6a776161a3ac6c2ab8c7d750",
      "actionName": "ec2:Restore*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:29.564Z",
      "lastSeenAt": "2026-08-08T17:03:29.564Z",
      "updatedAt": "2026-08-08T17:03:29.564Z"
    },
    {
      "_id": "6a776161a3ac6c2ab8c7d751",
      "actionName": "ec2:Reset*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:29.636Z",
      "lastSeenAt": "2026-08-08T17:03:29.636Z",
      "updatedAt": "2026-08-08T17:03:29.636Z"
    },
    {
      "_id": "6a776161a3ac6c2ab8c7d752",
      "actionName": "ec2:Update*",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:29.707Z",
      "lastSeenAt": "2026-08-08T17:03:29.707Z",
      "updatedAt": "2026-08-08T17:03:29.707Z"
    },
    {
      "_id": "6a776161a3ac6c2ab8c7d753",
      "actionName": "ec2:AcceptAddressTransfer",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:29.779Z",
      "lastSeenAt": "2026-08-08T17:03:29.779Z",
      "updatedAt": "2026-08-08T17:03:29.779Z"
    },
    {
      "_id": "6a776161a3ac6c2ab8c7d754",
      "actionName": "ec2:AcceptCapacityReservationBillingOwnership",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:29.850Z",
      "lastSeenAt": "2026-08-08T17:03:29.850Z",
      "updatedAt": "2026-08-08T17:03:29.850Z"
    },
    {
      "_id": "6a776162a3ac6c2ab8c7d755",
      "actionName": "ec2:AcceptReservedInstancesExchangeQuote",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:29.925Z",
      "lastSeenAt": "2026-08-08T17:03:29.925Z",
      "updatedAt": "2026-08-08T17:03:29.925Z"
    },
    {
      "_id": "6a776162a3ac6c2ab8c7d756",
      "actionName": "ec2:AcceptTransitGatewayClientVpnAttachment",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:29.997Z",
      "lastSeenAt": "2026-08-08T17:03:29.997Z",
      "updatedAt": "2026-08-08T17:03:29.997Z"
    },
    {
      "_id": "6a776162a3ac6c2ab8c7d757",
      "actionName": "ec2:AcceptTransitGatewayMulticastDomainAssociations",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:30.068Z",
      "lastSeenAt": "2026-08-08T17:03:30.068Z",
      "updatedAt": "2026-08-08T17:03:30.068Z"
    },
    {
      "_id": "6a776162a3ac6c2ab8c7d758",
      "resourceType": "ec2",
      "actionName": "ec2:AcceptTransitGatewayPeeringAttachment",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:30.141Z",
      "lastSeenAt": "2026-08-08T17:03:30.141Z",
      "updatedAt": "2026-08-08T17:03:30.141Z"
    },
    {
      "_id": "6a776162a3ac6c2ab8c7d759",
      "resourceType": "ec2",
      "actionName": "ec2:AcceptTransitGatewayVpcAttachment",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:30.213Z",
      "lastSeenAt": "2026-08-08T17:03:30.213Z",
      "updatedAt": "2026-08-08T17:03:30.213Z"
    },
    {
      "_id": "6a776162a3ac6c2ab8c7d75a",
      "resourceType": "ec2",
      "actionName": "ec2:AcceptVpcEndpointConnections",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:30.283Z",
      "lastSeenAt": "2026-08-08T17:03:30.283Z",
      "updatedAt": "2026-08-08T17:03:30.283Z"
    },
    {
      "_id": "6a776162a3ac6c2ab8c7d75b",
      "actionName": "ec2:AcceptVpcPeeringConnection",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:30.359Z",
      "lastSeenAt": "2026-08-08T17:03:30.359Z",
      "updatedAt": "2026-08-08T17:03:30.359Z"
    },
    {
      "_id": "6a776162a3ac6c2ab8c7d75c",
      "actionName": "ec2:AdvertiseByoipCidr",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:30.432Z",
      "lastSeenAt": "2026-08-08T17:03:30.432Z",
      "updatedAt": "2026-08-08T17:03:30.432Z"
    },
    {
      "_id": "6a776162a3ac6c2ab8c7d75d",
      "actionName": "ec2:AllocateAddress",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:30.504Z",
      "lastSeenAt": "2026-08-08T17:03:30.504Z",
      "updatedAt": "2026-08-08T17:03:30.504Z"
    },
    {
      "_id": "6a776162a3ac6c2ab8c7d75e",
      "actionName": "ec2:AllocateHosts",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:30.575Z",
      "lastSeenAt": "2026-08-08T17:03:30.575Z",
      "updatedAt": "2026-08-08T17:03:30.575Z"
    },
    {
      "_id": "6a776162a3ac6c2ab8c7d75f",
      "actionName": "ec2:AllocateIpamPoolCidr",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:30.648Z",
      "lastSeenAt": "2026-08-08T17:03:30.648Z",
      "updatedAt": "2026-08-08T17:03:30.648Z"
    },
    {
      "_id": "6a776162a3ac6c2ab8c7d760",
      "resourceType": "ec2",
      "actionName": "ec2:ApplySecurityGroupsToClientVpnTargetNetwork",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:30.719Z",
      "lastSeenAt": "2026-08-08T17:03:30.719Z",
      "updatedAt": "2026-08-08T17:03:30.719Z"
    },
    {
      "_id": "6a776162a3ac6c2ab8c7d761",
      "actionName": "ec2:AssignIpv6Addresses",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:30.790Z",
      "lastSeenAt": "2026-08-08T17:03:30.790Z",
      "updatedAt": "2026-08-08T17:03:30.790Z"
    },
    {
      "_id": "6a776162a3ac6c2ab8c7d762",
      "actionName": "ec2:AssignPrivateIpAddresses",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:30.863Z",
      "lastSeenAt": "2026-08-08T17:03:30.863Z",
      "updatedAt": "2026-08-08T17:03:30.863Z"
    },
    {
      "_id": "6a776163a3ac6c2ab8c7d763",
      "actionName": "ec2:AssignPrivateNatGatewayAddress",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:30.934Z",
      "lastSeenAt": "2026-08-08T17:03:30.934Z",
      "updatedAt": "2026-08-08T17:03:30.934Z"
    },
    {
      "_id": "6a776163a3ac6c2ab8c7d764",
      "actionName": "ec2:AssociateAddress",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:31.013Z",
      "lastSeenAt": "2026-08-08T17:03:31.013Z",
      "updatedAt": "2026-08-08T17:03:31.013Z"
    },
    {
      "_id": "6a776163a3ac6c2ab8c7d765",
      "actionName": "ec2:AssociateCapacityReservationBillingOwner",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:31.085Z",
      "lastSeenAt": "2026-08-08T17:03:31.085Z",
      "updatedAt": "2026-08-08T17:03:31.085Z"
    },
    {
      "_id": "6a776163a3ac6c2ab8c7d766",
      "actionName": "ec2:AssociateClientVpnTargetNetwork",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:31.156Z",
      "lastSeenAt": "2026-08-08T17:03:31.156Z",
      "updatedAt": "2026-08-08T17:03:31.156Z"
    },
    {
      "_id": "6a776163a3ac6c2ab8c7d767",
      "resourceType": "ec2",
      "actionName": "ec2:AssociateDhcpOptions",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:31.227Z",
      "lastSeenAt": "2026-08-08T17:03:31.227Z",
      "updatedAt": "2026-08-08T17:03:31.227Z"
    },
    {
      "_id": "6a776163a3ac6c2ab8c7d768",
      "actionName": "ec2:AssociateEnclaveCertificateIamRole",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:31.302Z",
      "lastSeenAt": "2026-08-08T17:03:31.302Z",
      "updatedAt": "2026-08-08T17:03:31.302Z"
    },
    {
      "_id": "6a776163a3ac6c2ab8c7d769",
      "actionName": "ec2:AssociateInstanceEventWindow",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:31.479Z",
      "lastSeenAt": "2026-08-08T17:03:31.479Z",
      "updatedAt": "2026-08-08T17:03:31.479Z"
    },
    {
      "_id": "6a776163a3ac6c2ab8c7d76a",
      "resourceType": "ec2",
      "actionName": "ec2:AssociateIpamByoasn",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:31.614Z",
      "lastSeenAt": "2026-08-08T17:03:31.613Z",
      "updatedAt": "2026-08-08T17:03:31.614Z"
    },
    {
      "_id": "6a776163a3ac6c2ab8c7d76b",
      "actionName": "ec2:AssociateIpamResourceDiscovery",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:31.720Z",
      "lastSeenAt": "2026-08-08T17:03:31.720Z",
      "updatedAt": "2026-08-08T17:03:31.720Z"
    },
    {
      "_id": "6a776164a3ac6c2ab8c7d76c",
      "resourceType": "ec2",
      "actionName": "ec2:AssociateNatGatewayAddress",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:31.830Z",
      "lastSeenAt": "2026-08-08T17:03:31.830Z",
      "updatedAt": "2026-08-08T17:03:31.830Z"
    },
    {
      "_id": "6a776164a3ac6c2ab8c7d76d",
      "actionName": "ec2:AssociateRouteServer",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:32.125Z",
      "lastSeenAt": "2026-08-08T17:03:32.125Z",
      "updatedAt": "2026-08-08T17:03:32.125Z"
    },
    {
      "_id": "6a776164a3ac6c2ab8c7d76e",
      "resourceType": "ec2",
      "actionName": "ec2:AssociateRouteTable",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:32.199Z",
      "lastSeenAt": "2026-08-08T17:03:32.199Z",
      "updatedAt": "2026-08-08T17:03:32.199Z"
    },
    {
      "_id": "6a776164a3ac6c2ab8c7d76f",
      "resourceType": "ec2",
      "actionName": "ec2:AssociateSecurityGroupVpc",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:32.274Z",
      "lastSeenAt": "2026-08-08T17:03:32.274Z",
      "updatedAt": "2026-08-08T17:03:32.274Z"
    },
    {
      "_id": "6a776164a3ac6c2ab8c7d770",
      "actionName": "ec2:AssociateSubnetCidrBlock",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:32.346Z",
      "lastSeenAt": "2026-08-08T17:03:32.346Z",
      "updatedAt": "2026-08-08T17:03:32.346Z"
    },
    {
      "_id": "6a776164a3ac6c2ab8c7d771",
      "actionName": "ec2:AssociateTransitGatewayMulticastDomain",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:32.425Z",
      "lastSeenAt": "2026-08-08T17:03:32.425Z",
      "updatedAt": "2026-08-08T17:03:32.425Z"
    },
    {
      "_id": "6a776164a3ac6c2ab8c7d772",
      "actionName": "ec2:AssociateTransitGatewayPolicyTable",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:32.496Z",
      "lastSeenAt": "2026-08-08T17:03:32.496Z",
      "updatedAt": "2026-08-08T17:03:32.496Z"
    },
    {
      "_id": "6a776164a3ac6c2ab8c7d773",
      "actionName": "ec2:AssociateTransitGatewayRouteTable",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:32.570Z",
      "lastSeenAt": "2026-08-08T17:03:32.570Z",
      "updatedAt": "2026-08-08T17:03:32.570Z"
    },
    {
      "_id": "6a776164a3ac6c2ab8c7d774",
      "actionName": "ec2:AssociateTrunkInterface",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:32.643Z",
      "lastSeenAt": "2026-08-08T17:03:32.643Z",
      "updatedAt": "2026-08-08T17:03:32.643Z"
    },
    {
      "_id": "6a776164a3ac6c2ab8c7d775",
      "resourceType": "ec2",
      "actionName": "ec2:AssociateVerifiedAccessInstanceWebAcl",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:32.717Z",
      "lastSeenAt": "2026-08-08T17:03:32.717Z",
      "updatedAt": "2026-08-08T17:03:32.717Z"
    },
    {
      "_id": "6a776164a3ac6c2ab8c7d776",
      "resourceType": "ec2",
      "actionName": "ec2:AssociateVpcCidrBlock",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:32.788Z",
      "lastSeenAt": "2026-08-08T17:03:32.788Z",
      "updatedAt": "2026-08-08T17:03:32.788Z"
    },
    {
      "_id": "6a776164a3ac6c2ab8c7d777",
      "actionName": "ec2:AttachApplianceToNatGateway",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:32.864Z",
      "lastSeenAt": "2026-08-08T17:03:32.864Z",
      "updatedAt": "2026-08-08T17:03:32.864Z"
    },
    {
      "_id": "6a776165a3ac6c2ab8c7d778",
      "actionName": "ec2:AttachClassicLinkVpc",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:32.943Z",
      "lastSeenAt": "2026-08-08T17:03:32.943Z",
      "updatedAt": "2026-08-08T17:03:32.943Z"
    },
    {
      "_id": "6a776165a3ac6c2ab8c7d779",
      "resourceType": "ec2",
      "actionName": "ec2:AttachImageWatermark",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:33.031Z",
      "lastSeenAt": "2026-08-08T17:03:33.031Z",
      "updatedAt": "2026-08-08T17:03:33.031Z"
    },
    {
      "_id": "6a776165a3ac6c2ab8c7d77a",
      "resourceType": "ec2",
      "actionName": "ec2:AttachInternetGateway",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:33.103Z",
      "lastSeenAt": "2026-08-08T17:03:33.103Z",
      "updatedAt": "2026-08-08T17:03:33.103Z"
    },
    {
      "_id": "6a776165a3ac6c2ab8c7d77b",
      "actionName": "ec2:AttachResourcesToPlacementGroup",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:33.248Z",
      "lastSeenAt": "2026-08-08T17:03:33.248Z",
      "updatedAt": "2026-08-08T17:03:33.248Z"
    },
    {
      "_id": "6a776165a3ac6c2ab8c7d77c",
      "resourceType": "ec2",
      "actionName": "ec2:AttachVerifiedAccessTrustProvider",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:33.364Z",
      "lastSeenAt": "2026-08-08T17:03:33.364Z",
      "updatedAt": "2026-08-08T17:03:33.364Z"
    },
    {
      "_id": "6a776165a3ac6c2ab8c7d77d",
      "actionName": "ec2:AttachVpnGateway",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:33.507Z",
      "lastSeenAt": "2026-08-08T17:03:33.507Z",
      "updatedAt": "2026-08-08T17:03:33.507Z"
    },
    {
      "_id": "6a776165a3ac6c2ab8c7d77e",
      "actionName": "ec2:AuthorizeClientVpnIngress",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:33.581Z",
      "lastSeenAt": "2026-08-08T17:03:33.581Z",
      "updatedAt": "2026-08-08T17:03:33.581Z"
    },
    {
      "_id": "6a776165a3ac6c2ab8c7d77f",
      "actionName": "ec2:BundleInstance",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:33.813Z",
      "lastSeenAt": "2026-08-08T17:03:33.813Z",
      "updatedAt": "2026-08-08T17:03:33.813Z"
    },
    {
      "_id": "6a776165a3ac6c2ab8c7d780",
      "resourceType": "ec2",
      "actionName": "ec2:CancelBundleTask",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:33.885Z",
      "lastSeenAt": "2026-08-08T17:03:33.885Z",
      "updatedAt": "2026-08-08T17:03:33.885Z"
    },
    {
      "_id": "6a776166a3ac6c2ab8c7d781",
      "actionName": "ec2:CancelCapacityReservation",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:33.957Z",
      "lastSeenAt": "2026-08-08T17:03:33.957Z",
      "updatedAt": "2026-08-08T17:03:33.957Z"
    },
    {
      "_id": "6a776166a3ac6c2ab8c7d782",
      "actionName": "ec2:CancelCapacityReservationFleets",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:34.029Z",
      "lastSeenAt": "2026-08-08T17:03:34.029Z",
      "updatedAt": "2026-08-08T17:03:34.029Z"
    },
    {
      "_id": "6a776166a3ac6c2ab8c7d783",
      "actionName": "ec2:CancelConversionTask",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:34.101Z",
      "lastSeenAt": "2026-08-08T17:03:34.101Z",
      "updatedAt": "2026-08-08T17:03:34.101Z"
    },
    {
      "_id": "6a776166a3ac6c2ab8c7d784",
      "actionName": "ec2:CancelDeclarativePoliciesReport",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:34.185Z",
      "lastSeenAt": "2026-08-08T17:03:34.185Z",
      "updatedAt": "2026-08-08T17:03:34.185Z"
    },
    {
      "_id": "6a776166a3ac6c2ab8c7d785",
      "actionName": "ec2:CancelExportTask",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:34.261Z",
      "lastSeenAt": "2026-08-08T17:03:34.261Z",
      "updatedAt": "2026-08-08T17:03:34.261Z"
    },
    {
      "_id": "6a776166a3ac6c2ab8c7d786",
      "resourceType": "ec2",
      "actionName": "ec2:CancelImageLaunchPermission",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:34.333Z",
      "lastSeenAt": "2026-08-08T17:03:34.333Z",
      "updatedAt": "2026-08-08T17:03:34.333Z"
    },
    {
      "_id": "6a776166a3ac6c2ab8c7d787",
      "actionName": "ec2:CancelImportTask",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:34.405Z",
      "lastSeenAt": "2026-08-08T17:03:34.405Z",
      "updatedAt": "2026-08-08T17:03:34.405Z"
    },
    {
      "_id": "6a776166a3ac6c2ab8c7d788",
      "actionName": "ec2:CancelReservedInstancesListing",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:34.485Z",
      "lastSeenAt": "2026-08-08T17:03:34.485Z",
      "updatedAt": "2026-08-08T17:03:34.485Z"
    },
    {
      "_id": "6a776166a3ac6c2ab8c7d789",
      "actionName": "ec2:CancelSpotFleetRequests",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:34.557Z",
      "lastSeenAt": "2026-08-08T17:03:34.557Z",
      "updatedAt": "2026-08-08T17:03:34.557Z"
    },
    {
      "_id": "6a776166a3ac6c2ab8c7d78a",
      "resourceType": "ec2",
      "actionName": "ec2:CancelSpotInstanceRequests",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:34.635Z",
      "lastSeenAt": "2026-08-08T17:03:34.635Z",
      "updatedAt": "2026-08-08T17:03:34.635Z"
    },
    {
      "_id": "6a776166a3ac6c2ab8c7d78b",
      "resourceType": "ec2",
      "actionName": "ec2:ConfirmProductInstance",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:34.709Z",
      "lastSeenAt": "2026-08-08T17:03:34.709Z",
      "updatedAt": "2026-08-08T17:03:34.709Z"
    },
    {
      "_id": "6a776166a3ac6c2ab8c7d78c",
      "actionName": "ec2:CopyFpgaImage",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:34.779Z",
      "lastSeenAt": "2026-08-08T17:03:34.779Z",
      "updatedAt": "2026-08-08T17:03:34.779Z"
    },
    {
      "_id": "6a776166a3ac6c2ab8c7d78d",
      "actionName": "ec2:CopyImage",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:34.851Z",
      "lastSeenAt": "2026-08-08T17:03:34.851Z",
      "updatedAt": "2026-08-08T17:03:34.851Z"
    },
    {
      "_id": "6a776167a3ac6c2ab8c7d78e",
      "actionName": "ec2:CopySnapshot",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:34.931Z",
      "lastSeenAt": "2026-08-08T17:03:34.931Z",
      "updatedAt": "2026-08-08T17:03:34.931Z"
    },
    {
      "_id": "6a776167a3ac6c2ab8c7d78f",
      "actionName": "ec2:CopyVolumes",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:35.003Z",
      "lastSeenAt": "2026-08-08T17:03:35.003Z",
      "updatedAt": "2026-08-08T17:03:35.003Z"
    },
    {
      "_id": "6a776167a3ac6c2ab8c7d790",
      "actionName": "ec2:CreateCapacityManagerDataExport",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:35.074Z",
      "lastSeenAt": "2026-08-08T17:03:35.074Z",
      "updatedAt": "2026-08-08T17:03:35.074Z"
    },
    {
      "_id": "6a776167a3ac6c2ab8c7d791",
      "actionName": "ec2:CreateCapacityReservation",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:35.145Z",
      "lastSeenAt": "2026-08-08T17:03:35.145Z",
      "updatedAt": "2026-08-08T17:03:35.145Z"
    },
    {
      "_id": "6a776167a3ac6c2ab8c7d792",
      "actionName": "ec2:CreateCapacityReservationBySplitting",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:35.216Z",
      "lastSeenAt": "2026-08-08T17:03:35.216Z",
      "updatedAt": "2026-08-08T17:03:35.216Z"
    },
    {
      "_id": "6a776167a3ac6c2ab8c7d793",
      "actionName": "ec2:CreateCapacityReservationCancellationQuote",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:35.301Z",
      "lastSeenAt": "2026-08-08T17:03:35.301Z",
      "updatedAt": "2026-08-08T17:03:35.301Z"
    },
    {
      "_id": "6a776167a3ac6c2ab8c7d794",
      "actionName": "ec2:CreateCapacityReservationFleet",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:35.373Z",
      "lastSeenAt": "2026-08-08T17:03:35.373Z",
      "updatedAt": "2026-08-08T17:03:35.373Z"
    },
    {
      "_id": "6a776167a3ac6c2ab8c7d795",
      "actionName": "ec2:CreateCarrierGateway",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:35.464Z",
      "lastSeenAt": "2026-08-08T17:03:35.464Z",
      "updatedAt": "2026-08-08T17:03:35.464Z"
    },
    {
      "_id": "6a776167a3ac6c2ab8c7d796",
      "actionName": "ec2:CreateClientVpnEndpoint",
      "resourceType": "ec2",
      "__v": 0,
      "createdAt": "2026-08-08T17:03:35.535Z",
      "lastSeenAt": "2026-08-08T17:03:35.535Z",
      "updatedAt": "2026-08-08T17:03:35.535Z"
    }
  ],
  "s3": [
    {
      "_id": "6a21ce96090eb7b79e1e3048",
      "actionName": "s3:*",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:29.212Z",
      "lastSeenAt": "2026-08-08T17:03:12.631Z",
      "updatedAt": "2026-08-08T17:03:12.633Z"
    },
    {
      "_id": "6a21ce96090eb7b79e1e3049",
      "actionName": "s3:Get*",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:30.002Z",
      "lastSeenAt": "2026-08-08T17:03:13.502Z",
      "updatedAt": "2026-08-08T17:03:13.502Z"
    },
    {
      "_id": "6a21ce96090eb7b79e1e304a",
      "actionName": "s3:Put*",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:30.068Z",
      "lastSeenAt": "2026-08-08T17:03:13.574Z",
      "updatedAt": "2026-08-08T17:03:13.574Z"
    },
    {
      "_id": "6a21ce96090eb7b79e1e304b",
      "actionName": "s3:List*",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:30.133Z",
      "lastSeenAt": "2026-08-08T17:03:13.646Z",
      "updatedAt": "2026-08-08T17:03:13.646Z"
    },
    {
      "_id": "6a21ce9b090eb7b79e1e309b",
      "actionName": "s3:GetObject",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:35.359Z",
      "lastSeenAt": "2026-08-08T17:03:19.660Z",
      "updatedAt": "2026-08-08T17:03:19.660Z"
    },
    {
      "_id": "6a21ce9f090eb7b79e1e30d9",
      "actionName": "s3:PutObject",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:39.360Z",
      "lastSeenAt": "2026-08-08T17:03:25.719Z",
      "updatedAt": "2026-08-08T17:03:25.719Z"
    },
    {
      "_id": "6a21ce96090eb7b79e1e304c",
      "actionName": "s3:Delete*",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:30.197Z",
      "lastSeenAt": "2026-08-08T17:03:13.716Z",
      "updatedAt": "2026-08-08T17:03:13.716Z"
    },
    {
      "_id": "6a21ce96090eb7b79e1e304d",
      "actionName": "s3:Create*",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:30.262Z",
      "lastSeenAt": "2026-08-08T17:03:13.788Z",
      "updatedAt": "2026-08-08T17:03:13.788Z"
    },
    {
      "_id": "6a21ce96090eb7b79e1e304e",
      "actionName": "s3:Describe*",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:30.324Z",
      "lastSeenAt": "2026-08-08T17:03:13.860Z",
      "updatedAt": "2026-08-08T17:03:13.860Z"
    },
    {
      "_id": "6a21ce96090eb7b79e1e304f",
      "actionName": "s3:Update*",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:30.389Z",
      "lastSeenAt": "2026-08-08T17:03:13.932Z",
      "updatedAt": "2026-08-08T17:03:13.932Z"
    },
    {
      "_id": "6a21ce96090eb7b79e1e3050",
      "actionName": "s3:Replicate*",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:30.453Z",
      "lastSeenAt": "2026-08-08T17:03:14.004Z",
      "updatedAt": "2026-08-08T17:03:14.004Z"
    },
    {
      "_id": "6a21ce96090eb7b79e1e3051",
      "resourceType": "s3",
      "actionName": "s3:AbortMultipartUpload",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:30.519Z",
      "lastSeenAt": "2026-08-08T17:03:14.076Z",
      "updatedAt": "2026-08-08T17:03:14.076Z"
    },
    {
      "_id": "6a21ce96090eb7b79e1e3052",
      "actionName": "s3:AssociateAccessGrantsIdentityCenter",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:30.583Z",
      "lastSeenAt": "2026-08-08T17:03:14.149Z",
      "updatedAt": "2026-08-08T17:03:14.149Z"
    },
    {
      "_id": "6a21ce96090eb7b79e1e3053",
      "actionName": "s3:BypassGovernanceRetention",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:30.647Z",
      "lastSeenAt": "2026-08-08T17:03:14.222Z",
      "updatedAt": "2026-08-08T17:03:14.222Z"
    },
    {
      "_id": "6a21ce96090eb7b79e1e3054",
      "actionName": "s3:CancelMetricsExtraction",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:30.725Z",
      "lastSeenAt": "2026-08-08T17:03:14.293Z",
      "updatedAt": "2026-08-08T17:03:14.294Z"
    },
    {
      "_id": "6a21ce96090eb7b79e1e3055",
      "actionName": "s3:CreateAccessGrant",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:30.789Z",
      "lastSeenAt": "2026-08-08T17:03:14.368Z",
      "updatedAt": "2026-08-08T17:03:14.368Z"
    },
    {
      "_id": "6a21ce96090eb7b79e1e3056",
      "actionName": "s3:CreateAccessGrantsInstance",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:30.852Z",
      "lastSeenAt": "2026-08-08T17:03:14.440Z",
      "updatedAt": "2026-08-08T17:03:14.440Z"
    },
    {
      "_id": "6a21ce97090eb7b79e1e3057",
      "actionName": "s3:CreateAccessGrantsLocation",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:30.918Z",
      "lastSeenAt": "2026-08-08T17:03:14.512Z",
      "updatedAt": "2026-08-08T17:03:14.512Z"
    },
    {
      "_id": "6a21ce97090eb7b79e1e3058",
      "actionName": "s3:CreateAccessPoint",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:30.983Z",
      "lastSeenAt": "2026-08-08T17:03:14.583Z",
      "updatedAt": "2026-08-08T17:03:14.583Z"
    },
    {
      "_id": "6a21ce97090eb7b79e1e3059",
      "actionName": "s3:CreateAccessPointForObjectLambda",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:31.047Z",
      "lastSeenAt": "2026-08-08T17:03:14.655Z",
      "updatedAt": "2026-08-08T17:03:14.655Z"
    },
    {
      "_id": "6a21ce97090eb7b79e1e305a",
      "resourceType": "s3",
      "actionName": "s3:CreateBucket",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:31.111Z",
      "lastSeenAt": "2026-08-08T17:03:14.728Z",
      "updatedAt": "2026-08-08T17:03:14.728Z"
    },
    {
      "_id": "6a21ce97090eb7b79e1e305b",
      "resourceType": "s3",
      "actionName": "s3:CreateJob",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:31.175Z",
      "lastSeenAt": "2026-08-08T17:03:14.799Z",
      "updatedAt": "2026-08-08T17:03:14.799Z"
    },
    {
      "_id": "6a21ce97090eb7b79e1e305c",
      "actionName": "s3:CreateMultiRegionAccessPoint",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:31.239Z",
      "lastSeenAt": "2026-08-08T17:03:14.872Z",
      "updatedAt": "2026-08-08T17:03:14.872Z"
    },
    {
      "_id": "6a21ce97090eb7b79e1e305d",
      "actionName": "s3:DeleteAccessGrant",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:31.305Z",
      "lastSeenAt": "2026-08-08T17:03:14.945Z",
      "updatedAt": "2026-08-08T17:03:14.945Z"
    },
    {
      "_id": "6a21ce97090eb7b79e1e305e",
      "resourceType": "s3",
      "actionName": "s3:DeleteAccessGrantsInstance",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:31.370Z",
      "lastSeenAt": "2026-08-08T17:03:15.017Z",
      "updatedAt": "2026-08-08T17:03:15.017Z"
    },
    {
      "_id": "6a21ce97090eb7b79e1e305f",
      "actionName": "s3:DeleteAccessGrantsLocation",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:31.434Z",
      "lastSeenAt": "2026-08-08T17:03:15.089Z",
      "updatedAt": "2026-08-08T17:03:15.090Z"
    },
    {
      "_id": "6a21ce97090eb7b79e1e3060",
      "actionName": "s3:DeleteAccessPoint",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:31.500Z",
      "lastSeenAt": "2026-08-08T17:03:15.163Z",
      "updatedAt": "2026-08-08T17:03:15.163Z"
    },
    {
      "_id": "6a21ce97090eb7b79e1e3061",
      "actionName": "s3:DeleteAccessPointForObjectLambda",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:31.565Z",
      "lastSeenAt": "2026-08-08T17:03:15.234Z",
      "updatedAt": "2026-08-08T17:03:15.234Z"
    },
    {
      "_id": "6a21ce97090eb7b79e1e3062",
      "actionName": "s3:DeleteAccessPointPolicy",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:31.627Z",
      "lastSeenAt": "2026-08-08T17:03:15.306Z",
      "updatedAt": "2026-08-08T17:03:15.306Z"
    },
    {
      "_id": "6a21ce97090eb7b79e1e3063",
      "actionName": "s3:DeleteAccessPointPolicyForObjectLambda",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:31.692Z",
      "lastSeenAt": "2026-08-08T17:03:15.379Z",
      "updatedAt": "2026-08-08T17:03:15.379Z"
    },
    {
      "_id": "6a21ce97090eb7b79e1e3064",
      "actionName": "s3:DeleteBucket",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:31.758Z",
      "lastSeenAt": "2026-08-08T17:03:15.452Z",
      "updatedAt": "2026-08-08T17:03:15.452Z"
    },
    {
      "_id": "6a21ce97090eb7b79e1e3065",
      "actionName": "s3:DeleteBucketPolicy",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:31.826Z",
      "lastSeenAt": "2026-08-08T17:03:15.527Z",
      "updatedAt": "2026-08-08T17:03:15.527Z"
    },
    {
      "_id": "6a21ce98090eb7b79e1e3066",
      "actionName": "s3:DeleteBucketWebsite",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:31.892Z",
      "lastSeenAt": "2026-08-08T17:03:15.599Z",
      "updatedAt": "2026-08-08T17:03:15.599Z"
    },
    {
      "_id": "6a21ce98090eb7b79e1e3067",
      "actionName": "s3:DeleteJobTagging",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:31.957Z",
      "lastSeenAt": "2026-08-08T17:03:15.670Z",
      "updatedAt": "2026-08-08T17:03:15.670Z"
    },
    {
      "_id": "6a21ce98090eb7b79e1e3068",
      "actionName": "s3:DeleteMultiRegionAccessPoint",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:32.022Z",
      "lastSeenAt": "2026-08-08T17:03:15.741Z",
      "updatedAt": "2026-08-08T17:03:15.741Z"
    },
    {
      "_id": "6a21ce98090eb7b79e1e3069",
      "resourceType": "s3",
      "actionName": "s3:DeleteObject",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:32.087Z",
      "lastSeenAt": "2026-08-08T17:03:15.812Z",
      "updatedAt": "2026-08-08T17:03:15.812Z"
    },
    {
      "_id": "6a21ce98090eb7b79e1e306a",
      "actionName": "s3:DeleteObjectTagging",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:32.151Z",
      "lastSeenAt": "2026-08-08T17:03:15.883Z",
      "updatedAt": "2026-08-08T17:03:15.883Z"
    },
    {
      "_id": "6a21ce98090eb7b79e1e306b",
      "actionName": "s3:DeleteObjectVersion",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:32.215Z",
      "lastSeenAt": "2026-08-08T17:03:15.960Z",
      "updatedAt": "2026-08-08T17:03:15.960Z"
    },
    {
      "_id": "6a21ce98090eb7b79e1e306c",
      "resourceType": "s3",
      "actionName": "s3:DeleteObjectVersionTagging",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:32.280Z",
      "lastSeenAt": "2026-08-08T17:03:16.031Z",
      "updatedAt": "2026-08-08T17:03:16.031Z"
    },
    {
      "_id": "6a21ce98090eb7b79e1e306d",
      "actionName": "s3:DeleteStorageLensConfiguration",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:32.345Z",
      "lastSeenAt": "2026-08-08T17:03:16.105Z",
      "updatedAt": "2026-08-08T17:03:16.105Z"
    },
    {
      "_id": "6a21ce98090eb7b79e1e306e",
      "actionName": "s3:DeleteStorageLensConfigurationTagging",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:32.409Z",
      "lastSeenAt": "2026-08-08T17:03:16.178Z",
      "updatedAt": "2026-08-08T17:03:16.178Z"
    },
    {
      "_id": "6a21ce98090eb7b79e1e306f",
      "actionName": "s3:DeleteStorageLensGroup",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:32.481Z",
      "lastSeenAt": "2026-08-08T17:03:16.276Z",
      "updatedAt": "2026-08-08T17:03:16.276Z"
    },
    {
      "_id": "6a21ce98090eb7b79e1e3070",
      "actionName": "s3:DescribeJob",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:32.550Z",
      "lastSeenAt": "2026-08-08T17:03:16.348Z",
      "updatedAt": "2026-08-08T17:03:16.348Z"
    },
    {
      "_id": "6a21ce98090eb7b79e1e3071",
      "resourceType": "s3",
      "actionName": "s3:DescribeMultiRegionAccessPointOperation",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:32.627Z",
      "lastSeenAt": "2026-08-08T17:03:16.421Z",
      "updatedAt": "2026-08-08T17:03:16.421Z"
    },
    {
      "_id": "6a21ce98090eb7b79e1e3072",
      "resourceType": "s3",
      "actionName": "s3:DissociateAccessGrantsIdentityCenter",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:32.693Z",
      "lastSeenAt": "2026-08-08T17:03:16.497Z",
      "updatedAt": "2026-08-08T17:03:16.497Z"
    },
    {
      "_id": "6a21ce98090eb7b79e1e3073",
      "resourceType": "s3",
      "actionName": "s3:GetAccelerateConfiguration",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:32.757Z",
      "lastSeenAt": "2026-08-08T17:03:16.570Z",
      "updatedAt": "2026-08-08T17:03:16.570Z"
    },
    {
      "_id": "6a21ce98090eb7b79e1e3074",
      "resourceType": "s3",
      "actionName": "s3:GetAccessGrant",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:32.823Z",
      "lastSeenAt": "2026-08-08T17:03:16.642Z",
      "updatedAt": "2026-08-08T17:03:16.642Z"
    },
    {
      "_id": "6a21ce99090eb7b79e1e3075",
      "actionName": "s3:GetAccessGrantsInstance",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:32.887Z",
      "lastSeenAt": "2026-08-08T17:03:16.726Z",
      "updatedAt": "2026-08-08T17:03:16.726Z"
    },
    {
      "_id": "6a21ce99090eb7b79e1e3076",
      "actionName": "s3:GetAccessGrantsInstanceForPrefix",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:32.951Z",
      "lastSeenAt": "2026-08-08T17:03:16.826Z",
      "updatedAt": "2026-08-08T17:03:16.826Z"
    },
    {
      "_id": "6a21ce99090eb7b79e1e3077",
      "actionName": "s3:GetAccessGrantsInstanceResourcePolicy",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:33.016Z",
      "lastSeenAt": "2026-08-08T17:03:16.901Z",
      "updatedAt": "2026-08-08T17:03:16.901Z"
    },
    {
      "_id": "6a21ce99090eb7b79e1e3078",
      "actionName": "s3:GetAccessGrantsLocation",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:33.080Z",
      "lastSeenAt": "2026-08-08T17:03:16.988Z",
      "updatedAt": "2026-08-08T17:03:16.988Z"
    },
    {
      "_id": "6a21ce99090eb7b79e1e3079",
      "resourceType": "s3",
      "actionName": "s3:GetAccessPoint",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:33.144Z",
      "lastSeenAt": "2026-08-08T17:03:17.061Z",
      "updatedAt": "2026-08-08T17:03:17.061Z"
    },
    {
      "_id": "6a21ce99090eb7b79e1e307a",
      "actionName": "s3:GetAccessPointConfigurationForObjectLambda",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:33.208Z",
      "lastSeenAt": "2026-08-08T17:03:17.135Z",
      "updatedAt": "2026-08-08T17:03:17.135Z"
    },
    {
      "_id": "6a21ce99090eb7b79e1e307b",
      "actionName": "s3:GetAccessPointForObjectLambda",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:33.272Z",
      "lastSeenAt": "2026-08-08T17:03:17.207Z",
      "updatedAt": "2026-08-08T17:03:17.207Z"
    },
    {
      "_id": "6a21ce99090eb7b79e1e307c",
      "actionName": "s3:GetAccessPointPolicy",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:33.336Z",
      "lastSeenAt": "2026-08-08T17:03:17.303Z",
      "updatedAt": "2026-08-08T17:03:17.304Z"
    },
    {
      "_id": "6a21ce99090eb7b79e1e307d",
      "actionName": "s3:GetAccessPointPolicyForObjectLambda",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:33.402Z",
      "lastSeenAt": "2026-08-08T17:03:17.388Z",
      "updatedAt": "2026-08-08T17:03:17.388Z"
    },
    {
      "_id": "6a21ce99090eb7b79e1e307e",
      "resourceType": "s3",
      "actionName": "s3:GetAccessPointPolicyStatus",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:33.466Z",
      "lastSeenAt": "2026-08-08T17:03:17.473Z",
      "updatedAt": "2026-08-08T17:03:17.473Z"
    },
    {
      "_id": "6a21ce99090eb7b79e1e307f",
      "actionName": "s3:GetAccessPointPolicyStatusForObjectLambda",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:33.530Z",
      "lastSeenAt": "2026-08-08T17:03:17.545Z",
      "updatedAt": "2026-08-08T17:03:17.545Z"
    },
    {
      "_id": "6a21ce99090eb7b79e1e3080",
      "actionName": "s3:GetAccountPublicAccessBlock",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:33.594Z",
      "lastSeenAt": "2026-08-08T17:03:17.619Z",
      "updatedAt": "2026-08-08T17:03:17.619Z"
    },
    {
      "_id": "6a21ce99090eb7b79e1e3081",
      "actionName": "s3:GetAnalyticsConfiguration",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:33.658Z",
      "lastSeenAt": "2026-08-08T17:03:17.728Z",
      "updatedAt": "2026-08-08T17:03:17.728Z"
    },
    {
      "_id": "6a21ce99090eb7b79e1e3082",
      "actionName": "s3:GetBucketAcl",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:33.724Z",
      "lastSeenAt": "2026-08-08T17:03:17.813Z",
      "updatedAt": "2026-08-08T17:03:17.813Z"
    },
    {
      "_id": "6a21ce99090eb7b79e1e3083",
      "actionName": "s3:GetBucketCORS",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:33.788Z",
      "lastSeenAt": "2026-08-08T17:03:17.889Z",
      "updatedAt": "2026-08-08T17:03:17.889Z"
    },
    {
      "_id": "6a21ce9a090eb7b79e1e3084",
      "actionName": "s3:GetBucketLocation",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:33.852Z",
      "lastSeenAt": "2026-08-08T17:03:17.965Z",
      "updatedAt": "2026-08-08T17:03:17.965Z"
    },
    {
      "_id": "6a21ce9a090eb7b79e1e3085",
      "actionName": "s3:GetBucketLogging",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:33.918Z",
      "lastSeenAt": "2026-08-08T17:03:18.037Z",
      "updatedAt": "2026-08-08T17:03:18.037Z"
    },
    {
      "_id": "6a21ce9a090eb7b79e1e3086",
      "actionName": "s3:GetBucketNotification",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:33.984Z",
      "lastSeenAt": "2026-08-08T17:03:18.109Z",
      "updatedAt": "2026-08-08T17:03:18.109Z"
    },
    {
      "_id": "6a21ce9a090eb7b79e1e3087",
      "actionName": "s3:GetBucketObjectLockConfiguration",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:34.048Z",
      "lastSeenAt": "2026-08-08T17:03:18.181Z",
      "updatedAt": "2026-08-08T17:03:18.181Z"
    },
    {
      "_id": "6a21ce9a090eb7b79e1e3088",
      "actionName": "s3:GetBucketOwnershipControls",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:34.112Z",
      "lastSeenAt": "2026-08-08T17:03:18.252Z",
      "updatedAt": "2026-08-08T17:03:18.253Z"
    },
    {
      "_id": "6a21ce9a090eb7b79e1e3089",
      "resourceType": "s3",
      "actionName": "s3:GetBucketPolicy",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:34.177Z",
      "lastSeenAt": "2026-08-08T17:03:18.339Z",
      "updatedAt": "2026-08-08T17:03:18.339Z"
    },
    {
      "_id": "6a21ce9a090eb7b79e1e308a",
      "actionName": "s3:GetBucketPolicyStatus",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:34.241Z",
      "lastSeenAt": "2026-08-08T17:03:18.424Z",
      "updatedAt": "2026-08-08T17:03:18.424Z"
    },
    {
      "_id": "6a21ce9a090eb7b79e1e308b",
      "actionName": "s3:GetBucketPublicAccessBlock",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:34.305Z",
      "lastSeenAt": "2026-08-08T17:03:18.496Z",
      "updatedAt": "2026-08-08T17:03:18.496Z"
    },
    {
      "_id": "6a21ce9a090eb7b79e1e308c",
      "actionName": "s3:GetBucketRequestPayment",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:34.377Z",
      "lastSeenAt": "2026-08-08T17:03:18.568Z",
      "updatedAt": "2026-08-08T17:03:18.568Z"
    },
    {
      "_id": "6a21ce9a090eb7b79e1e308d",
      "actionName": "s3:GetBucketTagging",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:34.443Z",
      "lastSeenAt": "2026-08-08T17:03:18.640Z",
      "updatedAt": "2026-08-08T17:03:18.640Z"
    },
    {
      "_id": "6a21ce9a090eb7b79e1e308e",
      "actionName": "s3:GetBucketVersioning",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:34.507Z",
      "lastSeenAt": "2026-08-08T17:03:18.711Z",
      "updatedAt": "2026-08-08T17:03:18.712Z"
    },
    {
      "_id": "6a21ce9a090eb7b79e1e308f",
      "actionName": "s3:GetBucketWebsite",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:34.580Z",
      "lastSeenAt": "2026-08-08T17:03:18.783Z",
      "updatedAt": "2026-08-08T17:03:18.783Z"
    },
    {
      "_id": "6a21ce9a090eb7b79e1e3090",
      "actionName": "s3:GetDataAccess",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:34.643Z",
      "lastSeenAt": "2026-08-08T17:03:18.854Z",
      "updatedAt": "2026-08-08T17:03:18.854Z"
    },
    {
      "_id": "6a21ce9a090eb7b79e1e3091",
      "actionName": "s3:GetEncryptionConfiguration",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:34.708Z",
      "lastSeenAt": "2026-08-08T17:03:18.925Z",
      "updatedAt": "2026-08-08T17:03:18.925Z"
    },
    {
      "_id": "6a21ce9a090eb7b79e1e3092",
      "actionName": "s3:GetIntelligentTieringConfiguration",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:34.772Z",
      "lastSeenAt": "2026-08-08T17:03:18.997Z",
      "updatedAt": "2026-08-08T17:03:18.997Z"
    },
    {
      "_id": "6a21ce9a090eb7b79e1e3093",
      "actionName": "s3:GetInventoryConfiguration",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:34.836Z",
      "lastSeenAt": "2026-08-08T17:03:19.069Z",
      "updatedAt": "2026-08-08T17:03:19.069Z"
    },
    {
      "_id": "6a21ce9b090eb7b79e1e3094",
      "actionName": "s3:GetJobTagging",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:34.899Z",
      "lastSeenAt": "2026-08-08T17:03:19.142Z",
      "updatedAt": "2026-08-08T17:03:19.142Z"
    },
    {
      "_id": "6a21ce9b090eb7b79e1e3095",
      "actionName": "s3:GetLifecycleConfiguration",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:34.975Z",
      "lastSeenAt": "2026-08-08T17:03:19.222Z",
      "updatedAt": "2026-08-08T17:03:19.222Z"
    },
    {
      "_id": "6a21ce9b090eb7b79e1e3096",
      "actionName": "s3:GetMetricsConfiguration",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:35.039Z",
      "lastSeenAt": "2026-08-08T17:03:19.295Z",
      "updatedAt": "2026-08-08T17:03:19.295Z"
    },
    {
      "_id": "6a21ce9b090eb7b79e1e3097",
      "actionName": "s3:GetMultiRegionAccessPoint",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:35.103Z",
      "lastSeenAt": "2026-08-08T17:03:19.367Z",
      "updatedAt": "2026-08-08T17:03:19.367Z"
    },
    {
      "_id": "6a21ce9b090eb7b79e1e3098",
      "actionName": "s3:GetMultiRegionAccessPointPolicy",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:35.169Z",
      "lastSeenAt": "2026-08-08T17:03:19.438Z",
      "updatedAt": "2026-08-08T17:03:19.438Z"
    },
    {
      "_id": "6a21ce9b090eb7b79e1e3099",
      "actionName": "s3:GetMultiRegionAccessPointPolicyStatus",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:35.233Z",
      "lastSeenAt": "2026-08-08T17:03:19.512Z",
      "updatedAt": "2026-08-08T17:03:19.512Z"
    },
    {
      "_id": "6a21ce9b090eb7b79e1e309a",
      "resourceType": "s3",
      "actionName": "s3:GetMultiRegionAccessPointRoutes",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:35.295Z",
      "lastSeenAt": "2026-08-08T17:03:19.582Z",
      "updatedAt": "2026-08-08T17:03:19.582Z"
    },
    {
      "_id": "6a21ce9b090eb7b79e1e309c",
      "actionName": "s3:GetObjectAcl",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:35.422Z",
      "lastSeenAt": "2026-08-08T17:03:19.978Z",
      "updatedAt": "2026-08-08T17:03:19.978Z"
    },
    {
      "_id": "6a21ce9b090eb7b79e1e309d",
      "actionName": "s3:GetObjectAttributes",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:35.486Z",
      "lastSeenAt": "2026-08-08T17:03:20.309Z",
      "updatedAt": "2026-08-08T17:03:20.309Z"
    },
    {
      "_id": "6a21ce9b090eb7b79e1e309e",
      "actionName": "s3:GetObjectLegalHold",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:35.550Z",
      "lastSeenAt": "2026-08-08T17:03:20.389Z",
      "updatedAt": "2026-08-08T17:03:20.389Z"
    },
    {
      "_id": "6a21ce9b090eb7b79e1e309f",
      "actionName": "s3:GetObjectRetention",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:35.614Z",
      "lastSeenAt": "2026-08-08T17:03:20.462Z",
      "updatedAt": "2026-08-08T17:03:20.462Z"
    },
    {
      "_id": "6a21ce9b090eb7b79e1e30a0",
      "actionName": "s3:GetObjectTagging",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:35.678Z",
      "lastSeenAt": "2026-08-08T17:03:20.538Z",
      "updatedAt": "2026-08-08T17:03:20.538Z"
    },
    {
      "_id": "6a21ce9b090eb7b79e1e30a1",
      "actionName": "s3:GetObjectTorrent",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:35.742Z",
      "lastSeenAt": "2026-08-08T17:03:20.859Z",
      "updatedAt": "2026-08-08T17:03:20.860Z"
    },
    {
      "_id": "6a21ce9b090eb7b79e1e30a2",
      "actionName": "s3:GetObjectVersion",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:35.808Z",
      "lastSeenAt": "2026-08-08T17:03:20.937Z",
      "updatedAt": "2026-08-08T17:03:20.937Z"
    },
    {
      "_id": "6a21ce9c090eb7b79e1e30a3",
      "actionName": "s3:GetObjectVersionAcl",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:35.873Z",
      "lastSeenAt": "2026-08-08T17:03:21.010Z",
      "updatedAt": "2026-08-08T17:03:21.010Z"
    },
    {
      "_id": "6a21ce9c090eb7b79e1e30a4",
      "resourceType": "s3",
      "actionName": "s3:GetObjectVersionAttributes",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:35.938Z",
      "lastSeenAt": "2026-08-08T17:03:21.083Z",
      "updatedAt": "2026-08-08T17:03:21.083Z"
    },
    {
      "_id": "6a21ce9c090eb7b79e1e30a5",
      "actionName": "s3:GetObjectVersionForReplication",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:36.002Z",
      "lastSeenAt": "2026-08-08T17:03:21.164Z",
      "updatedAt": "2026-08-08T17:03:21.164Z"
    },
    {
      "_id": "6a21ce9c090eb7b79e1e30a6",
      "actionName": "s3:GetObjectVersionTagging",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:36.066Z",
      "lastSeenAt": "2026-08-08T17:03:21.493Z",
      "updatedAt": "2026-08-08T17:03:21.493Z"
    },
    {
      "_id": "6a21ce9c090eb7b79e1e30a7",
      "actionName": "s3:GetObjectVersionTorrent",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:36.131Z",
      "lastSeenAt": "2026-08-08T17:03:21.579Z",
      "updatedAt": "2026-08-08T17:03:21.579Z"
    },
    {
      "_id": "6a21ce9c090eb7b79e1e30a8",
      "actionName": "s3:GetReplicationConfiguration",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:36.194Z",
      "lastSeenAt": "2026-08-08T17:03:21.659Z",
      "updatedAt": "2026-08-08T17:03:21.659Z"
    },
    {
      "_id": "6a21ce9c090eb7b79e1e30a9",
      "actionName": "s3:GetStorageLensConfiguration",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:36.259Z",
      "lastSeenAt": "2026-08-08T17:03:21.736Z",
      "updatedAt": "2026-08-08T17:03:21.736Z"
    },
    {
      "_id": "6a21ce9c090eb7b79e1e30aa",
      "actionName": "s3:GetStorageLensConfigurationTagging",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:36.326Z",
      "lastSeenAt": "2026-08-08T17:03:21.808Z",
      "updatedAt": "2026-08-08T17:03:21.808Z"
    },
    {
      "_id": "6a21ce9c090eb7b79e1e30ab",
      "actionName": "s3:GetStorageLensDashboard",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:36.391Z",
      "lastSeenAt": "2026-08-08T17:03:21.880Z",
      "updatedAt": "2026-08-08T17:03:21.880Z"
    },
    {
      "_id": "6a21ce9c090eb7b79e1e30ac",
      "actionName": "s3:GetStorageLensGroup",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:36.455Z",
      "lastSeenAt": "2026-08-08T17:03:21.957Z",
      "updatedAt": "2026-08-08T17:03:21.957Z"
    },
    {
      "_id": "6a21ce9c090eb7b79e1e30ad",
      "actionName": "s3:InitiateReplication",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:36.522Z",
      "lastSeenAt": "2026-08-08T17:03:22.028Z",
      "updatedAt": "2026-08-08T17:03:22.028Z"
    },
    {
      "_id": "6a21ce9c090eb7b79e1e30ae",
      "resourceType": "s3",
      "actionName": "s3:ListAccessGrants",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:36.588Z",
      "lastSeenAt": "2026-08-08T17:03:22.110Z",
      "updatedAt": "2026-08-08T17:03:22.110Z"
    },
    {
      "_id": "6a21ce9c090eb7b79e1e30af",
      "actionName": "s3:ListAccessGrantsInstances",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:36.656Z",
      "lastSeenAt": "2026-08-08T17:03:22.197Z",
      "updatedAt": "2026-08-08T17:03:22.197Z"
    },
    {
      "_id": "6a21ce9c090eb7b79e1e30b0",
      "actionName": "s3:ListAccessGrantsLocations",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:36.721Z",
      "lastSeenAt": "2026-08-08T17:03:22.270Z",
      "updatedAt": "2026-08-08T17:03:22.270Z"
    },
    {
      "_id": "6a21ce9c090eb7b79e1e30b1",
      "actionName": "s3:ListAccessPoints",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:36.785Z",
      "lastSeenAt": "2026-08-08T17:03:22.343Z",
      "updatedAt": "2026-08-08T17:03:22.343Z"
    },
    {
      "_id": "6a21ce9c090eb7b79e1e30b2",
      "actionName": "s3:ListAccessPointsForObjectLambda",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:36.850Z",
      "lastSeenAt": "2026-08-08T17:03:22.416Z",
      "updatedAt": "2026-08-08T17:03:22.416Z"
    },
    {
      "_id": "6a21ce9d090eb7b79e1e30b3",
      "actionName": "s3:ListAllMyBuckets",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:36.916Z",
      "lastSeenAt": "2026-08-08T17:03:22.488Z",
      "updatedAt": "2026-08-08T17:03:22.488Z"
    },
    {
      "_id": "6a21ce9d090eb7b79e1e30b4",
      "resourceType": "s3",
      "actionName": "s3:ListBucket",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:36.980Z",
      "lastSeenAt": "2026-08-08T17:03:22.561Z",
      "updatedAt": "2026-08-08T17:03:22.561Z"
    },
    {
      "_id": "6a21ce9d090eb7b79e1e30b5",
      "resourceType": "s3",
      "actionName": "s3:ListBucketMultipartUploads",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:37.043Z",
      "lastSeenAt": "2026-08-08T17:03:22.637Z",
      "updatedAt": "2026-08-08T17:03:22.637Z"
    },
    {
      "_id": "6a21ce9d090eb7b79e1e30b6",
      "actionName": "s3:ListBucketVersions",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:37.107Z",
      "lastSeenAt": "2026-08-08T17:03:22.710Z",
      "updatedAt": "2026-08-08T17:03:22.710Z"
    },
    {
      "_id": "6a21ce9d090eb7b79e1e30b7",
      "actionName": "s3:ListCallerAccessGrants",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:37.172Z",
      "lastSeenAt": "2026-08-08T17:03:22.788Z",
      "updatedAt": "2026-08-08T17:03:22.788Z"
    },
    {
      "_id": "6a21ce9d090eb7b79e1e30b8",
      "actionName": "s3:ListJobs",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:37.236Z",
      "lastSeenAt": "2026-08-08T17:03:22.861Z",
      "updatedAt": "2026-08-08T17:03:22.861Z"
    },
    {
      "_id": "6a21ce9d090eb7b79e1e30b9",
      "actionName": "s3:ListMultiRegionAccessPoints",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:37.300Z",
      "lastSeenAt": "2026-08-08T17:03:22.932Z",
      "updatedAt": "2026-08-08T17:03:22.933Z"
    },
    {
      "_id": "6a21ce9d090eb7b79e1e30ba",
      "actionName": "s3:ListMultipartUploadParts",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:37.364Z",
      "lastSeenAt": "2026-08-08T17:03:23.006Z",
      "updatedAt": "2026-08-08T17:03:23.006Z"
    },
    {
      "_id": "6a21ce9d090eb7b79e1e30bb",
      "actionName": "s3:ListStorageLensConfigurations",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:37.428Z",
      "lastSeenAt": "2026-08-08T17:03:23.079Z",
      "updatedAt": "2026-08-08T17:03:23.080Z"
    },
    {
      "_id": "6a21ce9d090eb7b79e1e30bc",
      "actionName": "s3:ListStorageLensGroups",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:37.493Z",
      "lastSeenAt": "2026-08-08T17:03:23.150Z",
      "updatedAt": "2026-08-08T17:03:23.151Z"
    },
    {
      "_id": "6a21ce9d090eb7b79e1e30bd",
      "resourceType": "s3",
      "actionName": "s3:ObjectOwnerOverrideToBucketOwner",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:37.558Z",
      "lastSeenAt": "2026-08-08T17:03:23.222Z",
      "updatedAt": "2026-08-08T17:03:23.222Z"
    },
    {
      "_id": "6a21ce9d090eb7b79e1e30be",
      "actionName": "s3:PauseReplication",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:37.623Z",
      "lastSeenAt": "2026-08-08T17:03:23.298Z",
      "updatedAt": "2026-08-08T17:03:23.298Z"
    },
    {
      "_id": "6a21ce9d090eb7b79e1e30bf",
      "actionName": "s3:PutAccelerateConfiguration",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:37.686Z",
      "lastSeenAt": "2026-08-08T17:03:23.371Z",
      "updatedAt": "2026-08-08T17:03:23.371Z"
    },
    {
      "_id": "6a21ce9d090eb7b79e1e30c0",
      "actionName": "s3:PutAccessGrantsInstanceResourcePolicy",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:37.750Z",
      "lastSeenAt": "2026-08-08T17:03:23.443Z",
      "updatedAt": "2026-08-08T17:03:23.443Z"
    },
    {
      "_id": "6a21ce9d090eb7b79e1e30c1",
      "actionName": "s3:PutAccessPointConfigurationForObjectLambda",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:37.814Z",
      "lastSeenAt": "2026-08-08T17:03:23.515Z",
      "updatedAt": "2026-08-08T17:03:23.515Z"
    },
    {
      "_id": "6a21ce9e090eb7b79e1e30c2",
      "actionName": "s3:PutAccessPointPolicy",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:37.879Z",
      "lastSeenAt": "2026-08-08T17:03:23.587Z",
      "updatedAt": "2026-08-08T17:03:23.587Z"
    },
    {
      "_id": "6a21ce9e090eb7b79e1e30c3",
      "actionName": "s3:PutAccessPointPolicyForObjectLambda",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:37.944Z",
      "lastSeenAt": "2026-08-08T17:03:23.664Z",
      "updatedAt": "2026-08-08T17:03:23.664Z"
    },
    {
      "_id": "6a21ce9e090eb7b79e1e30c4",
      "actionName": "s3:PutAccountPublicAccessBlock",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:38.010Z",
      "lastSeenAt": "2026-08-08T17:03:23.737Z",
      "updatedAt": "2026-08-08T17:03:23.737Z"
    },
    {
      "_id": "6a21ce9e090eb7b79e1e30c5",
      "actionName": "s3:PutAnalyticsConfiguration",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:38.075Z",
      "lastSeenAt": "2026-08-08T17:03:23.814Z",
      "updatedAt": "2026-08-08T17:03:23.814Z"
    },
    {
      "_id": "6a21ce9e090eb7b79e1e30c6",
      "actionName": "s3:PutBucketAcl",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:38.139Z",
      "lastSeenAt": "2026-08-08T17:03:23.887Z",
      "updatedAt": "2026-08-08T17:03:23.887Z"
    },
    {
      "_id": "6a21ce9e090eb7b79e1e30c7",
      "resourceType": "s3",
      "actionName": "s3:PutBucketCORS",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:38.204Z",
      "lastSeenAt": "2026-08-08T17:03:23.959Z",
      "updatedAt": "2026-08-08T17:03:23.959Z"
    },
    {
      "_id": "6a21ce9e090eb7b79e1e30c8",
      "actionName": "s3:PutBucketLogging",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:38.269Z",
      "lastSeenAt": "2026-08-08T17:03:24.054Z",
      "updatedAt": "2026-08-08T17:03:24.054Z"
    },
    {
      "_id": "6a21ce9e090eb7b79e1e30c9",
      "actionName": "s3:PutBucketNotification",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:38.334Z",
      "lastSeenAt": "2026-08-08T17:03:24.155Z",
      "updatedAt": "2026-08-08T17:03:24.155Z"
    },
    {
      "_id": "6a21ce9e090eb7b79e1e30ca",
      "actionName": "s3:PutBucketObjectLockConfiguration",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:38.397Z",
      "lastSeenAt": "2026-08-08T17:03:24.253Z",
      "updatedAt": "2026-08-08T17:03:24.253Z"
    },
    {
      "_id": "6a21ce9e090eb7b79e1e30cb",
      "resourceType": "s3",
      "actionName": "s3:PutBucketOwnershipControls",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:38.461Z",
      "lastSeenAt": "2026-08-08T17:03:24.328Z",
      "updatedAt": "2026-08-08T17:03:24.328Z"
    },
    {
      "_id": "6a21ce9e090eb7b79e1e30cc",
      "actionName": "s3:PutBucketPolicy",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:38.523Z",
      "lastSeenAt": "2026-08-08T17:03:24.402Z",
      "updatedAt": "2026-08-08T17:03:24.402Z"
    },
    {
      "_id": "6a21ce9e090eb7b79e1e30cd",
      "actionName": "s3:PutBucketPublicAccessBlock",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:38.587Z",
      "lastSeenAt": "2026-08-08T17:03:24.476Z",
      "updatedAt": "2026-08-08T17:03:24.476Z"
    },
    {
      "_id": "6a21ce9e090eb7b79e1e30ce",
      "actionName": "s3:PutBucketRequestPayment",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:38.651Z",
      "lastSeenAt": "2026-08-08T17:03:24.552Z",
      "updatedAt": "2026-08-08T17:03:24.552Z"
    },
    {
      "_id": "6a21ce9e090eb7b79e1e30cf",
      "actionName": "s3:PutBucketTagging",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:38.715Z",
      "lastSeenAt": "2026-08-08T17:03:24.674Z",
      "updatedAt": "2026-08-08T17:03:24.674Z"
    },
    {
      "_id": "6a21ce9e090eb7b79e1e30d0",
      "actionName": "s3:PutBucketVersioning",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:38.780Z",
      "lastSeenAt": "2026-08-08T17:03:24.861Z",
      "updatedAt": "2026-08-08T17:03:24.861Z"
    },
    {
      "_id": "6a21ce9e090eb7b79e1e30d1",
      "actionName": "s3:PutBucketWebsite",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:38.843Z",
      "lastSeenAt": "2026-08-08T17:03:24.948Z",
      "updatedAt": "2026-08-08T17:03:24.948Z"
    },
    {
      "_id": "6a21ce9f090eb7b79e1e30d2",
      "actionName": "s3:PutEncryptionConfiguration",
      "resourceType": "s3",
      "__v": 0,
      "createdAt": "2026-06-04T19:14:38.907Z",
      "lastSeenAt": "2026-08-08T17:03:25.020Z",
      "updatedAt": "2026-08-08T17:03:25.020Z"
    }
  ]
};
